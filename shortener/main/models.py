from django.db import models


class Url(models.Model):
    href = models.CharField(max_length=1000)

