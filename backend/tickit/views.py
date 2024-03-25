from django.shortcuts import render
from rest_framework import generics
from .serializers import VenueSerializer, EventSerializer
from .models import Venue, Event

# Create your views here.
class VenueList(generics.ListCreateAPIView): # CRUD: view, add
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer
class VenueDetail(generics.RetrieveUpdateDestroyAPIView): # CRUD: view, edit, delete
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer

class EventList(generics.ListCreateAPIView): # CRUD: view, add
    queryset = Event.objects.all()
    serializer_class = EventSerializer
class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer