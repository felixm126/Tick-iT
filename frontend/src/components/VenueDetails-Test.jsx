import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function VenueDetails() {
	// let navigate = useNavigate()

	// let {id} = useParams()

	// const [venue, setVenue] = useState([])

	// useEffect(() => {
	// 	const getVenues = async() => {
	// 		const response = await axios.get(`http://localhost:8000/venues/${id}`)
	// 		setVenue(response.data)
	// 	}
	// 	getVenues()
	// }, [venue])

	// if (!venue) {
	// 	return <div className="loading">Loading...</div>
	// } else {
	return (
		<div className="venue-detail-page">
			<div className="venue-detail-card">
				<div className="detail-card-img-container">
					<img className="detail-card-img" 
						// src={venue.venue_img} 
						// alt={venue.venue_name}
					/>
				</div>
				<div className="venue-info-primary">
					<div className="text-title-32">Venue NAme</div>
					<div className="text-body-16">Venue Type</div>
				</div>
				<div className="venue-info-location">
					<FontAwesomeIcon icon={faLocationDot} className="venue-location-icon"/>
					<div className="text-body-12-reg">Street Address, City State Zip Code</div>
				</div>
				<Link to="/addevent" className="event-card-button-container">
						<div className="text-stylized-16">add event</div>
				</Link>
			</div>

			{/* <div className="venue-event-list">
				<div className="list-header">
					<div className="text-title-24">Upcoming Events</div>
				</div>
				<div className="venue-event-list-grid"> */}
					{/* {events.map((event, id) => (
					<div className="list-card">
						<div className="list-card-img-container">
							<img className="list-card-img" /> */}
							{/* <img src={event.event_img} alt={event.event_name} className="list-card-img"/> */}
						{/* </div>
						<div className="list-card-info">
							<div className="text-title-20">Event Name</div>
							<div className="text-body-14-med spacing-5">Event Host</div>
							<div className="text-body-14-light spacing-5">$Min - $Max</div>
							<div className="text-body-16 spacing-7">Event Date</div> */}
							{/* <div className="text-title-20">{event.event_name}</div>
									<div className="text-body-14-med spacing-5">@ {event.event_host}</div>
									<div className="text-body-14-light spacing-5">${event.ticket_pricing_min} - ${event.ticket_pricing_max}</div>
									<div className="text-body-16 spacing-7">{event.event_date}</div> */}
						{/* </div>
						<div className="list-card-button-container">
							<div className="list-card-button-text text-stylized-14">
								tikits
							</div>
						</div>
					</div> */}

					{/* ))} */}
				{/* </div> */}
			{/* </div> */}

		</div>
	)
}
// }
export default VenueDetails
