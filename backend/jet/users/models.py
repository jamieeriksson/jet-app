from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.utils import timezone
from phonenumber_field.modelfields import PhoneNumberField
from rest_framework_simplejwt.tokens import RefreshToken

from jet.models import BaseModel


class UserManager(models.Manager):
    def get_by_natural_key(self, username):
        return self.get(**{self.model.USERNAME_FIELD: username})

    def create(self, email=None, password=None, **extra_fields):
        """
        Creates and saves a User with the given email and password.
        """
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()

        return user


class User(AbstractBaseUser, BaseModel):
    name = models.TextField()
    email = models.EmailField(unique=True)
    password = models.TextField()
    phone_number = PhoneNumberField(null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = UserManager()

    USERNAME_FIELD = "email"

    def get_auth_tokens(self):
        token = RefreshToken.for_user(self)

        return {"refresh": str(token), "access": str(token.access_token)}
