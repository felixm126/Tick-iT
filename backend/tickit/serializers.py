from rest_framework import serializers
from .models import Venue, Event


class EventSerializer(serializers.HyperlinkedModelSerializer):
    venue = serializers.HyperlinkedRelatedField(
        view_name='venue_detail',
        read_only=True
    )
    venue_id = serializers.PrimaryKeyRelatedField(
        queryset=Venue.objects.all(),
        source='venue'
    )

    class Meta:
        model = Event
        fields = ('venue_id', 'venue', 'event_name', 'event_type', 'event_host',
                  'event_time', 'event_date', 'event_img', 'ticket_price_min', 'ticket_price_max')


class VenueSerializer(serializers.HyperlinkedModelSerializer):
    event = EventSerializer(
        many=True,
        read_only=True
    )
    event_url = serializers.ModelSerializer.serializer_url_field(
        view_name='event_detail'
    )

    class Meta:
        model = Venue
        fields = ('event', 'event_url', 'venue_name', 'street_address', 'city',
                  'state', 'zip_code', 'venue_type', 'venue_img')
