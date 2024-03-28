import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

function EventList() {
	// let navigate = useNavigate()

	// const [events, setEvents] = useState([])

	// useEffect(() => {
	// 	const getEvents = async() => {
	// 		const response = await axios.get('http://localhost:8000/events')
	// 		setEvents(response.data)
	// 	}
	// 	getEvents()
	// }, [])
	// console.log(events)

	// // Sort by soonest date

	// if (!events) {
	// 	return <div className="loading">Loading...</div>
	// } else {
		return (
			<div className="venue-list-page">
				<div className="list-header">
					<div className="text-title-24">Venues</div>
					<div className="list-location-set">
						<FontAwesomeIcon icon={faLocationDot} className="list-location-icon"/>
						<div className="text-body-14-reg text-underline">Philadelphia</div>
					</div>

				</div>
				<div className="list-grid">
					{/* {events.map((event, id) => ( */}
						<div className="list-card">
							<div className="list-card-img-container">
								<img className="list-card-img"/>
								{/* <img src={event.event_img} alt={event.event_name} className="list-card-img"/> */}
							</div>
							<div className="list-card-info">
								<div className="venue-list-info-primary">
									<div className="text-title-20">Venue Name</div>
									<div className="text-body-14-med spacing-10">Venue Space Type</div>
									{/* <div className="text-title-20">{venue.venue_name}</div>
									<div className="text-body-14-med spacing-10">{venue.venue_type}</div> */}
								</div>
								<div className="venue-list-info-location spacing-5">
									<div className="text-body-14-light">Venue Street Address</div>
									<div className="text-body-14-light">City, State, Zip</div>
									{/* <div className="text-body-14-light">{venue.street_address}</div>
									<div className="text-body-14-light">{venue.city}, {venue.state} {venue.zip_code}</div> */}
								</div>
							</div>
							<div className="list-card-button-container">
								<div className="list-card-button-text text-stylized-14">view</div>
							</div>
						</div>
					{/* ))} */}
				</div>
			</div>
		)
	}
// }
export default EventList
