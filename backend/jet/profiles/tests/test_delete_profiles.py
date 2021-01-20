from rest_framework.test import APIClient

from jet.users.factories import UserFactory

from ..factories import ProfileFactory
from ..models import Profile
from ..serializers import ProfileSerializer


def test_user_can_delete_profile():
    user = UserFactory()

    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f"Bearer {user.get_auth_tokens()['access']}")

    profile_data = ProfileSerializer(ProfileFactory.build()).data
    response = client.post("/profiles", profile_data)
    profile = Profile.objects.get(owner=user)

    response = client.delete(f"/profiles/{profile.id}")

    assert response.status_code == 204
    assert len(Profile.objects.all()) == 0


def test_cannot_delete_another_user_profile():
    user = UserFactory()
    other_user = UserFactory()

    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f"Bearer {user.get_auth_tokens()['access']}")

    profile_data = ProfileSerializer(ProfileFactory.build()).data
    response = client.post("/profiles", profile_data)
    profile = Profile.objects.get(owner=user)

    client.credentials(
        HTTP_AUTHORIZATION=f"Bearer {other_user.get_auth_tokens()['access']}"
    )

    response = client.delete(f"/profiles/{profile.id}")

    assert response.status_code == 403
    assert (
        response.json()["detail"]
        == "You do not have permission to perform this action."
    )


def test_cannot_delete_profile_without_user():
    user = UserFactory()

    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f"Bearer {user.get_auth_tokens()['access']}")

    profile_data = ProfileSerializer(ProfileFactory.build()).data
    response = client.post("/profiles", profile_data)
    profile = Profile.objects.get(owner=user)

    client.credentials(HTTP_AUTHORIZATION=None)

    response = client.delete(f"/profiles/{profile.id}")

    assert response.status_code == 401
    assert response.json()["detail"] == "Authentication credentials were not provided."


def test_staff_can_delete_another_user_profile():
    user = UserFactory()
    staff = UserFactory()
    staff.is_staff = True
    staff.save()

    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f"Bearer {user.get_auth_tokens()['access']}")

    profile_data = ProfileSerializer(ProfileFactory.build()).data
    response = client.post("/profiles", profile_data)
    profile = Profile.objects.get(owner=user)

    client.credentials(HTTP_AUTHORIZATION=f"Bearer {staff.get_auth_tokens()['access']}")

    response = client.delete(f"/profiles/{profile.id}")

    assert response.status_code == 204
    assert len(Profile.objects.all()) == 0
