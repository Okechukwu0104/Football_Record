from rest_framework import serializers
from .models import *

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id', 'name']


# class ContinentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Continent
#         fields = ['id', 'name']

class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ['id', 'name']

class CharacteristicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characteristics
        fields = ['id', 'name']

class FootballClubSerializer(serializers.ModelSerializer):
    # country = CountrySerializer()
    # league = LeagueSerializer()
    # origin = OriginSerializer()
    # characteristics = CharacteristicsSerializer(many=True)

    class Meta:
        model = FootballClub
        fields = '__all__'

    