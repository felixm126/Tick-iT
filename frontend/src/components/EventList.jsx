import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function EventList() {
	// let navigate = useNavigate()

	// const [events, setEvents] = useState([])

	// useEffect(() => {
	// 	const getVenues = async() => {
	// 		const response = await axios.get('http://localhost:8000/events')
	// 		setEvents(response.data)
	// 	}
	// 	getEvents()
	// }, [])
	// console.log(events)

	// if (!events) {
	// 	return <div className="loading">Loading...</div>
	// } else {
		return (
			<div className="event-list-page">
				<div className="list-title">Upcoming Events</div>
				<div className="list-grid">
					{/* {events.map((event, id) => ( */}
						<div className="list-card">
							<div className="list-card-img-container">
								<img className="list-card-img"/>
								{/* <img src={event.event_img} alt={event.event_name} className="list-card-img"/> */}
							</div>
							<div className="list-card-info">
								<div className="text-title-20">Event Name</div>
								<div className="text-body-14-med">Event Host</div>
								<div className="text-body-14-light">Event Venue</div>
								<div className="text-body-14-reg">Event Date</div>
								{/* <div className="text-title-20">{event.event_name}</div>
								<div className="text-body-14-med">{event.event_host}</div>
								<div className="text-body-14-light">{event.venue}</div>
								<div className="text-body-14-reg">{event.event_date}</div> */}
							</div>
							<div className="list-card-button">tikits</div>
						</div>
					{/* ))} */}
				</div>
			</div>
		)
	}
// }
export default EventList
