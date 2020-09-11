from rest_framework import serializers

from announcement.models import Announcement


class AnnouncementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = ['id', 'title', 'author', 'announcement', 'date']
