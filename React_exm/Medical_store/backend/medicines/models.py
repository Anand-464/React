from django.db import models
from django.contrib.auth.models import User


class Medicine(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='medicines'
    )

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    quantity = models.PositiveIntegerField(default=0)
    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name