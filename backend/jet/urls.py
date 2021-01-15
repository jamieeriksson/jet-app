from django.urls import path
from rest_framework.response import Response
from rest_framework import status


def root(request):
    test = "test2"
    print(test)
    return Response(status.HTTP_200_OK)


urlpatterns = [path("", root)]
