from django.db import models

# Create your models here.
class Venue(models.Model):
    venue_name = models.CharField(max_length=100, default = 'undefined')
    street_address = models.CharField(max_length=100, default = 'undefined')
    city = models.CharField(max_length=100, default = 'undefined')
    state = models.CharField(max_length=100, default = 'undefined')
    zip_code = models.CharField(max_length=100, default = 'undefined')
    
    venue_type = models.CharField(max_length=200, default = 'undefined')
    venue_img = models.TextField(default = 'undefined')
    
    def __str__(self):
        return self.venue_name

class Event(models.Model):
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE, related_name='venue')
    event_name = models.CharField(max_length=100, default = 'undefined')
    event_type = models.CharField(max_length=100, default = 'undefined')
    event_host = models.TextField(max_length=100, default = 'undefined')
    event_time = models.TextField(max_length=10, default = 'undefined')
    event_date = models.TextField(max_length=100, default = 'undefined')
    event_img = models.TextField(default = 'undefined')

    ticket_price_min = models.IntegerField(max_length=100, default = 'undefined')
    ticket_price_max = models.IntegerField(max_length=100, default = 'undefined')


    def __str__(self):
        return self.event_name