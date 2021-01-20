from django.contrib.auth.models import AnonymousUser
from rest_framework import mixins, viewsets

from .models import Profile
from .permissions import IsOwnerOrReadOnly
from .serializers import ProfileSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
