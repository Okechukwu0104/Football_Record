from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *
from rest_framework.response import Response


class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    

# class ContinentViewSet(viewsets.ModelViewSet):
#     queryset = Continent.objects.all()
#     serializer_class = ContinentSerializer
#     permission_classes = [permissions.AllowAny]

#     def list(self, request):
#         queryset = self.get_queryset()
#         serializer = self.get_serializer(queryset, many=True)
#         return Response(serializer.data)


class LeagueViewSet(viewsets.ModelViewSet):
    queryset = League.objects.all()
    serializer_class = LeagueSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    

class CharacteristicsViewSet(viewsets.ModelViewSet):
    queryset = Characteristics.objects.all()
    serializer_class = CharacteristicsSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    


class FootballClubViewSet(viewsets.ModelViewSet):   
    queryset = FootballClub.objects.all()
    serializer_class = FootballClubSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    