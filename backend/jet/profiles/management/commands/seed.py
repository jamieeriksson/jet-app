from django.core.management import call_command
from django.core.management.base import BaseCommand

from jet.profiles.factories import ProfileFactory
from jet.profiles.models import Profile
from jet.users.factories import UserFactory
from jet.users.models import User


class Command(BaseCommand):
    help = "Seeds database with users"

    def handle(self, *args, **kwargs):
        print("Seeding database...")

        # call_command("flush", "--no-input")

        # def clear_data():
        """Deletes all the table data"""
        print("Delete current instances")
        User.objects.all().delete()
        Profile.objects.all().delete()

        for i in range(10):
            UserFactory()

        for user in User.objects.all():
            ProfileFactory(owner=user)

        funded_user = UserFactory()
        ProfileFactory(owner=funded_user, is_funded=True)

        print("Database seeded successfully")
