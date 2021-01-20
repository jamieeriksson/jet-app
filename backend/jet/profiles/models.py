from django.db import models
from django.db.models.fields.related import ManyToManyField, OneToOneField
from django_countries.fields import CountryField

from jet.models import BaseModel
from jet.users.models import User


class Profile(BaseModel):
    owner = OneToOneField(User, on_delete=models.CASCADE)

    name = models.TextField(max_length=255)
    birthdate = models.DateField(null=True, blank=True)
    gender = models.TextField(null=True, blank=True)
    race = models.TextField(null=True, blank=True)
    country = CountryField(null=True, blank=True)
    ultimate_start_dt = models.DateField(null=True, blank=True)
    teams_played_for = models.TextField(null=True, blank=True)
    funding_goal = models.DecimalField(max_digits=5, decimal_places=2)
    # funding_current = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField()
