from django.contrib.auth.models import AnonymousUser
from rest_framework import mixins, viewsets

from jet.profiles.models import Profile
from jet.profiles.permissions import IsOwnerOrReadOnly
from jet.profiles.serializers import ProfileSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
