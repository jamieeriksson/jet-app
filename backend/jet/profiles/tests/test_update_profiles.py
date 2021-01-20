from rest_framework.test import APIClient

from jet.users.tests.factories import UserFactory

from ..models import Profile
from ..serializers import ProfileSerializer
from .factories import ProfileFactory


def test_user_can_update_profile():
    user = UserFactory()

    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f"Bearer {user.get_auth_tokens()['access']}")

    profile_data = ProfileSerializer(ProfileFactory.build()).data
    response = client.post("/profiles", profile_data)
    profile = Profile.objects.get(owner=user)

    response = client.patch(
        f"/profiles/{profile.id}",
        {"name": "New Name", "description": "New description. Please fund me!"},
    )
    profile = Profile.objects.get(owner=user)

    assert response.status_code == 200
    assert profile.name == "New Name"
    assert profile.description == "New description. Please fund me!"


def test_cannot_update_another_user_profile():
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

    response = client.patch(
        f"/profiles/{profile.id}",
        {"name": "New Name", "description": "New description. Please fund me!"},
    )

    assert response.status_code == 403
    assert (
        response.json()["detail"]
        == "You do not have permission to perform this action."
    )


def test_cannot_update_profile_without_user():
    user = UserFactory()

    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f"Bearer {user.get_auth_tokens()['access']}")

    profile_data = ProfileSerializer(ProfileFactory.build()).data
    response = client.post("/profiles", profile_data)
    profile = Profile.objects.get(owner=user)

    client.credentials(HTTP_AUTHORIZATION=None)

    response = client.patch(
        f"/profiles/{profile.id}",
        {"name": "New Name", "description": "New description. Please fund me!"},
    )

    assert response.status_code == 401
    assert response.json()["detail"] == "Authentication credentials were not provided."


def test_staff_can_update_another_user_profile():
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

    response = client.patch(
        f"/profiles/{profile.id}",
        {"name": "New Name", "description": "New description. Please fund me!"},
    )
    profile = Profile.objects.get(owner=user)

    assert response.status_code == 200
    assert profile.name == "New Name"
    assert profile.description == "New description. Please fund me!"
