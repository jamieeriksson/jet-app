from rest_framework import serializers

from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "name",
            "email",
            "birthdate",
            "country",
            "ultimate_start_dt",
            "teams_played_for",
            "funding_goal",
            "description",
        ]
        # read_only_fields = ["funding_current"]
