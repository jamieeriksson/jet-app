from rest_framework.test import APIClient

from jet.users.factories import UserFactory

from ..factories import ProfileFactory
from ..models import Profile
from ..serializers import ProfileSerializer


def test_can_get_profiles():
    user = UserFactory()
    second_user = UserFactory()
    third_user = UserFactory()

    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f"Bearer {user.get_auth_tokens()['access']}")

    profile_data = ProfileSerializer(ProfileFactory.build()).data
    response = client.post("/profiles", profile_data)

    client.credentials(
        HTTP_AUTHORIZATION=f"Bearer {second_user.get_auth_tokens()['access']}"
    )
    profile_data = ProfileSerializer(ProfileFactory.build()).data
    response = client.post("/profiles", profile_data)

    client.credentials(
        HTTP_AUTHORIZATION=f"Bearer {third_user.get_auth_tokens()['access']}"
    )

    response = client.get("/profiles")

    assert response.status_code == 200
    assert len(Profile.objects.all()) == 2


def test_can_get_profiles_with_no_user_account():
    user = UserFactory()
    second_user = UserFactory()

    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f"Bearer {user.get_auth_tokens()['access']}")

    profile_data = ProfileSerializer(ProfileFactory.build()).data
    response = client.post("/profiles", profile_data)

    client.credentials(
        HTTP_AUTHORIZATION=f"Bearer {second_user.get_auth_tokens()['access']}"
    )
    profile_data = ProfileSerializer(ProfileFactory.build()).data
    response = client.post("/profiles", profile_data)

    client.credentials(HTTP_AUTHORIZATION=None)

    response = client.get("/profiles")

    assert response.status_code == 200
    assert len(Profile.objects.all()) == 2


def test_can_get_single_profile():
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

    response = client.get(f"/profiles/{profile.id}")

    assert response.status_code == 200
    assert response.json()["name"] == profile.name


def test_can_get_single_profile_with_no_user_account():
    user = UserFactory()

    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f"Bearer {user.get_auth_tokens()['access']}")

    profile_data = ProfileSerializer(ProfileFactory.build()).data
    response = client.post("/profiles", profile_data)
    profile = Profile.objects.get(owner=user)

    client.credentials(HTTP_AUTHORIZATION=None)

    response = client.get(f"/profiles/{profile.id}")

    assert response.status_code == 200
    assert response.json()["name"] == profile.name
