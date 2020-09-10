from rest_framework import viewsets

from announcement.models import Announcement
from .serializers import AnnouncementsSerializer


class AnnouncementViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = AnnouncementsSerializer
    queryset = Announcement.objects.all()
