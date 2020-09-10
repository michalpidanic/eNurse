from rest_framework import viewsets

from announcement.models import Announcement
from .serializers import AnnouncementsSerializer


class AnnouncementViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = AnnouncementsSerializer
    queryset = Announcement.objects.all()


""" from rest_framework.generics import ListAPIView, RetrieveAPIView




class AnnouncementListView(ListAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementsSerializer


# class AnnouncementDetailView(RetrieveAPIView):
#    queryset = Announcement.objects.all()
#    serializer_class = AnnouncementsSerializer
 """
