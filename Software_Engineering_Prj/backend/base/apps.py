from django.apps import AppConfig


class BaseConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'base'

# users/apps.py
# from django.apps import AppConfig

# class UsersConfig(AppConfig):
#     name = 'base'

#     def ready(self):
#         import base.signals
