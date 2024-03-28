import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function EventList() {
	let navigate = useNavigate()

	const [events, setEvents] = useState([])

	useEffect(() => {
		const getEvents = async() => {
			const response = await axios.get('http://localhost:8000/events')
			setEvents(response.data)
		}
		getEvents()
	}, [])
	console.log(events)

	// Sort by soonest date

	if (!events) {
		return <div className="loading">Loading...</div>
	} else {
		return (
			<div className="event-list-page">
				<div className="list-header">
					<div className="text-title-24">Upcoming Events</div>
					<div className="list-location-set">
						<div className="list-location-icon">📍</div>
						<div className="text-body-14-reg text-underline">Philadelphia</div>
					</div>

				</div>
				<div className="list-grid">
					{events.map((event, id) => (
						<div className="list-card">
							<div className="list-card-img-container">
								<img src={event.event_img} alt={event.event_name} className="list-card-img"/>
							</div>
							<div className="list-card-info">
								<div className="text-title-20">{event.event_name}</div>
								<div className="text-body-14-med spacing-5">@ {event.event_host}</div>
								<div className="text-body-14-light spacing-5">{event.venue}</div>
								<div className="text-body-16 spacing-7">{event.event_date}</div>
							</div>
							<div className="list-card-button-container">
								<div className="list-card-button-text text-stylized-14">tikits</div>
								{/* Link to Event Details Page */}
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}
export default EventList
