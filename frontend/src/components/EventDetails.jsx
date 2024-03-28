import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faTicket } from '@fortawesome/free-solid-svg-icons'

function EventDetails() {
	let navigate = useNavigate()

	let { id } = useParams()

	const [event, setEvent] = useState([])

	useEffect(() => {
		const getEvents = async () => {
			const response = await axios.get(`http://localhost:8000/events/${id}`)
			// const response = await axios.get(`http://localhost:8000/events/id/${id}`)
			setEvent(response.data)
		}
		getEvents()
	}, [event])

	if (!event) {
		return <div className="loading">Loading...</div>
	} else {
		return (
			<div className="event-detail-page">
				<div className="detail-card">
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
						<div className="text-body-18">{event.event_host}</div>
					</div>
					{/* <div className="event-info-location">
						<div className="event-location-set">
							<FontAwesomeIcon
								icon={faLocationDot}
								className="event-location-icon"
							/>
							<div className="text-body-14-light">{event.venue}</div>
						</div>
						<div className="text-body-12-reg">
							{event.venue.street_address}, {event.venue.city}{' '}
							{event.venue.state} {event.venue.zip_code}
						</div>
					</div> */}
					<div className="event-info-date-time">
						<div className="event-date-set">
							<FontAwesomeIcon icon={faCalendar} className="event-date-icon" />
							<div className="text-body-20">{event.event_date}</div>
						</div>
						<div className="event-time-set">
							<FontAwesomeIcon icon={faClock} className="event-time-icon" />
							<div className="text-body-20">{event.event_time}</div>
						</div>
					</div>
					<div className="event-info-pricing">
						<FontAwesomeIcon icon={faTicket} className="event-ticket-icon" />
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
						<div className="text-stylized-16">browse tikits</div>
					</div>
				</div>
			</div>
		)
	}
}
export default EventDetails
