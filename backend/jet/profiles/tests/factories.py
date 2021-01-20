import datetime

import factory
import factory.django

from ..models import Profile


class ProfileFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Profile

    birthdate = factory.Faker(
        "date_between_dates",
        date_start=datetime.date(1990, 1, 1),
        date_end=datetime.date(2005, 1, 1),
    )
    gender = factory.Faker("random_element", elements=("M", "F", "non-binary"))

    if factory.SelfAttribute("..gender") == "F":
        name = factory.Faker("name_female")
    elif factory.SelfAttribute("..gender") == "M":
        name = factory.Faker("name_male")
    else:
        name = factory.Faker("name_nonbinary")

    race = factory.Faker("color_name")
    country = factory.Faker("country_code")
    ultimate_start_dt = factory.Faker(
        "date_between_dates", date_start=factory.SelfAttribute("..birthdate")
    )
    teams_played_for = factory.Faker("company")
    funding_goal = factory.Faker("randomize_nb_elements", number=100)
    description = factory.Faker("paragraph")
