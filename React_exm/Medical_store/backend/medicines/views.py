from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from rest_framework.filters import SearchFilter
from .models import Medicine
from .serializers import MedicineSerializer


class MedicineViewSet(viewsets.ModelViewSet):
    serializer_class = MedicineSerializer
    permission_classes = [IsAuthenticated]

    # Enable medicine search
    filter_backends = [SearchFilter]
    search_fields = ['name', 'description']

    def get_queryset(self):
        return Medicine.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        medicine_count = Medicine.objects.filter(
            user=self.request.user
        ).count()

        if medicine_count >= 5:
            raise ValidationError(
                "You can add a maximum of 5 medicines."
            )

        serializer.save(user=self.request.user)
