from django.db import models

# Create your models here.


class Venue(models.Model):
    venue_name = models.CharField(max_length=100, default='')
    street_address = models.CharField(max_length=100, default='')
    city = models.CharField(max_length=100, default='')
    state = models.CharField(max_length=100, default='')
    zip_code = models.CharField(max_length=100, default='')

    venue_type = models.CharField(max_length=200, default='')
    venue_img = models.TextField(default='')

    def __str__(self):
        return self.venue_name


class Event(models.Model):
    tickit_venue = models.ForeignKey(
        Venue, on_delete=models.CASCADE, related_name='events')
    event_name = models.CharField(max_length=100, default='')
    event_type = models.CharField(max_length=100, default='')
    event_host = models.TextField(max_length=100, default='')
    event_time = models.TextField(max_length=10, default='')
    event_date = models.CharField(max_length=100, default='')
    event_img = models.TextField(default='')

    ticket_price_min = models.IntegerField()
    ticket_price_max = models.IntegerField()

    def __str__(self):
        return self.event_name
