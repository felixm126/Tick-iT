from django.db import models
from django.views.generic.edit import CreateView
from .models import Event
# Create your models here.


class Venue(models.Model):
    venue_name = models.CharField(max_length=100, default='undefined')
    street_address = models.CharField(max_length=100, default='undefined')
    city = models.CharField(max_length=100, default='undefined')
    state = models.CharField(max_length=100, default='undefined')
    zip_code = models.CharField(max_length=100, default='undefined')

    venue_type = models.CharField(max_length=200, default='undefined')
    venue_img = models.TextField(default='undefined')

    def __str__(self):
        return self.venue_name


class Event(models.Model):
    venue = models.ForeignKey(
        Venue, on_delete=models.CASCADE, related_name='venue')
    event_name = models.CharField(max_length=100, default='undefined')
    event_type = models.CharField(max_length=100, default='undefined')
    event_host = models.TextField(max_length=100, default='undefined')
    event_time = models.TextField(max_length=10, default='undefined')
    event_date = models.TextField(max_length=100, default='undefined')
    event_img = models.TextField(default='undefined')

    ticket_price_min = models.IntegerField()
    ticket_price_max = models.IntegerField()

    def __str__(self):
        return self.event_name

class AddEvent(CreateView):
    model = Event
    fields = ['venue', 'event_name', 'event_type', 'event_host', 'event_time', 'event_date', 'event_img', 'ticket_price_min', 'ticket_price_max']
    template_name = 'add_event.html'
    success_url = '/events/'

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)