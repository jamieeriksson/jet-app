import factory
import factory.django

from jet.users.models import User


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User

    name = factory.Faker("name")
    email = factory.Faker("email")
