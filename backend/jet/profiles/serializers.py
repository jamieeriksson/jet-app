from django.core.exceptions import ValidationError
from rest_framework import serializers

from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Profile
        fields = [
            "id",
            "created_at",
            "modified_at",
            "owner",
            "name",
            "birthdate",
            "gender",
            "race",
            "country",
            "ultimate_start_dt",
            "teams_played_for",
            "funding_goal",
            "description",
        ]
        # read_only_fields = ["funding_current"]
