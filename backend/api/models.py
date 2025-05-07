from django.db import models

class Country(models.Model):
    name = models.CharField(unique=True, max_length=50)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

# class Continent(models.Model):
#     name = models.CharField(unique=True, max_length=50)
#     created = models.DateTimeField(auto_now_add=True)
#     modified = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.name



class League(models.Model):
    name = models.CharField(unique=True, max_length=50)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    


class Characteristics(models.Model):
    name = models.CharField(unique=True, max_length=50)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    

class FootballClub(models.Model):
    name = models.CharField(unique=True, max_length=50)
    description = models.TextField(max_length=1000, default='Describe your team')
    attendance = models.IntegerField(null =True, blank=True)
    city = models.CharField(max_length=50)
    stadium = models.CharField(max_length=50)

    country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name='football_clubs')
    league = models.ForeignKey(League, on_delete=models.CASCADE, related_name='football_clubs')
    # continent = models.ForeignKey(Continent, on_delete=models.CASCADE, related_name='football_clubs')
    characteristics = models.ManyToManyField(Characteristics, related_name='football_clubs')

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __set__(self):
        return {self.name, self.league}