from rest_framework.test import APIClient

from jet.users.tests.factories import UserFactory

from ..models import Profile
from ..serializers import ProfileSerializer
from .factories import ProfileFactory


def test_user_can_create_profile():
    user = UserFactory()

    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f"Bearer {user.get_auth_tokens()['access']}")

    profile_data = ProfileSerializer(ProfileFactory.build()).data

    response = client.post("/profiles", profile_data)
    profile = Profile.objects.get(name=profile_data["name"])

    assert response.status_code == 201
    assert len(Profile.objects.all()) == 1
    assert profile.owner == user


def test_cannot_create_profile_without_user():
    profile_data = ProfileSerializer(ProfileFactory.build()).data

    client = APIClient()
    response = client.post("/profiles", profile_data)
    print(response)

    assert response.status_code == 401
    assert response.json()["detail"] == "Authentication credentials were not provided."


def test_user_cannot_create_multiple_profiles():
    user = UserFactory()

    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f"Bearer {user.get_auth_tokens()['access']}")

    first_profile_data = ProfileSerializer(ProfileFactory.build()).data
    client.post("/profiles", first_profile_data)

    second_profile_data = ProfileSerializer(ProfileFactory.build()).data
    response = client.post("/profiles", second_profile_data)

    assert response.status_code == 403
    assert (
        response.json()["detail"]
        == "You do not have permission to perform this action."
    )
