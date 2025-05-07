from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'countries', CountryViewSet, basename='country')
# router.register(r'continents', ContinentViewSet, basename='continent')
router.register(r'leagues', LeagueViewSet, basename='league')
router.register(r'characteristics', CharacteristicsViewSet, basename='characteristics')
router.register(r'footballclubs', FootballClubViewSet, basename='footballclub')




urlpatterns = router.urls