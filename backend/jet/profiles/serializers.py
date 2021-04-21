from django.core.exceptions import ValidationError
from rest_framework import serializers

from jet.profiles.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Profile
        fields = [
            "id",
            "created_at",
            "modified_at",
            "owner",  # Need to hide?
            "name",
            "birthdate",
            "gender",
            "race",
            "country",
            "ultimate_start_dt",
            "teams_played_for",
            "funding_goal",
            "description",
            "is_funded",
        ]
        read_only_fields = ["is_funded"]
