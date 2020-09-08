from django.urls import path, include

from .views import AnnouncementListView

urlpatterns = [
    path('', AnnouncementListView.as_view())

]
