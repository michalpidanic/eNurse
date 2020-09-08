from rest_framework.generics import ListAPIView, RetrieveAPIView

from announcement.models import Announcement
from .serializers import AnnouncementsSerializer


class AnnouncementListView(ListAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementsSerializer


# class AnnouncementDetailView(RetrieveAPIView):
#    queryset = Announcement.objects.all()
#    serializer_class = AnnouncementsSerializer
