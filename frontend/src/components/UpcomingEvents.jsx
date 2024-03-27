import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UpcomingEvents() {
	const [upcomingEvents, setUpcomingEvents] = useState([])
	const [noEvents, setNoEvents] = useState(false)
	const navigate = useNavigate()
	useEffect(() => {
		const getUpcomingEvents = async () => {
			// TODO: Do we need to create a url endpoint for searching just local events?
			// const url = https://localhost:8000/events/local
			const response = await axios.get(url)

			// Adapted examples shown in -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
			const sortedEvents = response.data
				// compare the 2 dates after converting to date obj and subtract from each other to determine order
				.sort((a, b) => new Date(a.event_date) - new Date(b.event_date))
				// use slice to limit to only 4 events
				.slice(0, 4)

			setUpcomingEvents(sortedEvents)

			if (response.data.length === 0) {
				setNoEvents(true)
			}
		}
		getUpcomingEvents()
	}, [])

	if (noEvents) {
		return <p>No Events near you...</p>
	}
	return (
		<div className="event-detail-page">
			{upcomingEvents.map((event) => (
				<div
					key={event.id}
					className="detail-card"
					onClick={() => navigate(`/events/${event.id}`)}
				>
					<div className="detail-card-img-container">
						<img
							className="detail-card-img"
							src={event.event_img}
							alt={event.event_name}
						/>
					</div>
					<div className="event-info-primary">
						<div className="text-title-32 margin-bottom-neg-10">
							{event.event_name}
						</div>
						<div className="text-body-16-med">{event.event_host}</div>
					</div>
					<div className="event-info-location">
						<div className="event-location-set">
							<div className="event-location-icon">:round_pushpin:</div>
							<div className="text-body-14-light">
								{event.venue.city}, {event.venue.state}
							</div>
						</div>
						<div className="text-body-12-reg">
							{event.venue.street_address}, {event.venue.city}{' '}
							{event.venue.state} {event.venue.zip_code}
						</div>
					</div>
					<div className="event-info-date-time">
						<div className="event-date-set">
							<div className="event-date-icon">:date:</div>
							<div className="text-body-20">{event.event_date}</div>
						</div>
						<div className="event-time-set">
							<div className="event-time-icon">:clock3:</div>
							<div className="text-body-20">{event.event_time}</div>
						</div>
					</div>
					<div className="event-info-pricing">
						<div className="event-ticket-icon">:ticket:</div>
						<div className="event-pricing-min">
							<div className="text-body-20">${event.ticket_price_min}</div>
							<div className="text-body-10">min</div>
						</div>
						<div className="text-body-20 event-pricing-spacer">-</div>
						<div className="event-pricing-max">
							<div className="text-body-20">${event.ticket_price_max}</div>
							<div className="text-body-10">max</div>
						</div>
					</div>
					<div className="event-card-button-container">
						<button className="text-stylized-16">Browse Tickets</button>
					</div>
				</div>
			))}
		</div>
	)
}
export default UpcomingEvents
