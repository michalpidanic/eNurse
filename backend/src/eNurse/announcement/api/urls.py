from django.urls import path, include

from .views import AnnouncementListView, AnnouncementDetailView

urlpatterns = [
    path('', AnnouncementListView.as_view()),
    path('<pk>', AnnouncementDetailView.as_view())

]
