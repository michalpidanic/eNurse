from django.urls import path, include

#from .views import AnnouncementListView


from announcement.api.views import AnnouncementViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', AnnouncementViewSet, basename='announcement')
urlpatterns = router.urls

""" urlpatterns = [
    path('', AnnouncementListView.as_view())

]
 """
