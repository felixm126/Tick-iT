import {useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function EventDetails() {
	// let navigate = useNavigate()

	// let {id} = useParams()

	// const [event, setEvent] = useState([])

	// useEffect(() => {
	// 	const getEvents = async() => {
	// 		const response = await axios.get(`http://localhost:8000/events/${id}`)
	// 		// const response = await axios.get(`http://localhost:8000/events/id/${id}`)
	// 		setEvents(response.data)
	// 	}
	// 	getEvents()
	// }, [event])
	// console.log(event)

	// if (!event) {
	// 	return <div className="loading">Loading...</div>
	// } else {
		return (
			<div className="event-detail-page">
				<div className="detail-card">
					<div className="detail-card-img-container">
						<img className="detail-card-img"/>
						{/* <img className="detail-card-img" src={event.event_img} alt={event.event_name}/> */}
					</div>
					<div className="event-info-primary">
						<div className="text-title-32 margin-bottom-neg-10">Event Name</div>
						<div className="text-body-16-med margin-bottom-neg-5">Event Host</div>
						{/* <div className="text-title-32">{event.event_name}</div>
						<div className="text-body-16-med">{event.event_host}</div> */}
					</div>
					<div className="event-info-location">
						<div className="event-location-set">
							<div className="event-location-icon">📍</div>
							<div className="text-body-14-light">Venue Name</div>
							{/* <div className="text-body-14-light">{event.venue}</div> */}
						</div>
						<div className="text-body-12-reg">Venue Address</div>
						{/* <div className="text-body-12-reg">{event.venue.street_address}, {event.venue.city} {event.venue.state} {event.venue.zip_code}</div> */}
					</div>
					<div className="event-info-date-time">
						<div className="event-date-set">
							<div className="event-date-icon">📅</div>
							<div className="text-body-20">Date</div>
							{/* <div className="text-body-20">{event.event_date}</div> */}
						</div>
						<div className="event-time-set">
							<div className="event-time-icon">🕒</div>
							<div className="text-body-20">Time</div>
							{/* <div className="text-body-20">{event.event_time}</div> */}
						</div>
					</div>
					<div className="event-info-pricing">
						<div className="event-ticket-icon">🎫</div>
						<div className="event-pricing-min">
							<div className="text-body-20">$Min</div>
							{/* <div className="text-body-20">${event.ticket_price_min}</div> */}
							<div className="text-body-10">min</div>
						</div>
						<div className="text-body-20 event-pricing-spacer">-</div>
						<div className="event-pricing-max">
							<div className="text-body-20">$Max</div>
							{/* <div className="text-body-20">${event.ticket_price_max}</div> */}
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
// }
export default EventDetails
