from django.urls import include, path
from rest_framework.routers import DefaultRouter

from jet.profiles.views import ProfileViewSet
from jet.users.views import LogInView, LogOutView, RefreshTokenView, UserViewSet

router = DefaultRouter(trailing_slash=False)
router.register("profiles", ProfileViewSet)
router.register("users", UserViewSet)

urlpatterns = [
    path("log-in", LogInView.as_view()),
    path("refresh-token", RefreshTokenView.as_view()),
    path("log-out", LogOutView.as_view()),
    path("", include(router.urls)),
]
