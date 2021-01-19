from rest_framework import mixins, viewsets

from .models import Profile
from .permissions import IsOwnerOrReadOnly
from .serializers import ProfileSerializer


class ProfileViewSet(
    viewsets.GenericViewSet,
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]
