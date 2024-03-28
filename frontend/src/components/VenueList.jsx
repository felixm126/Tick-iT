import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function VenueList() {
	let navigate = useNavigate()

	const [venues, setVenues] = useState([])

	useEffect(() => {
		const getVenues = async () => {
			const response = await axios.get('http://localhost:8000/venues')
			setVenues(response.data)
		}
		getVenues()
	}, [])

	// Sort by nearest, in theory, or most popular

	if (!venues) {
		return <div className="loading">Loading...</div>
	} else {
		return (
			<div className="venue-list-page">
				<div className="list-header">
					<div className="text-title-24">Venues</div>
					<div className="list-location-set">
						<FontAwesomeIcon
							icon={faLocationDot}
							className="list-location-icon"
						/>
						<div className="text-body-14-reg text-underline">Philadelphia</div>
					</div>
				</div>
				<div className="list-grid">
					{venues.map((venue, id) => (
						<div className="list-card">
							<div className="list-card-img-container">
								<img
									src={venue.venue_img}
									alt={venue.venue_name}
									className="list-card-img"
								/>
							</div>
							<div className="list-card-info">
								<div className="venue-list-info-primary">
									<div className="text-title-20">{venue.venue_name}</div>
									<div className="text-body-14-med spacing-10">
										{venue.venue_type}
									</div>
								</div>
								<div className="venue-list-info-location spacing-5">
									<div className="text-body-14-light">
										{venue.street_address}
									</div>
									<div className="text-body-14-light">
										{venue.city}, {venue.state} {venue.zip_code}
									</div>
								</div>
							</div>
							<Link
								className="list-card-button-container"
								to={`/venues/${id + 1}`}
								key={id}
							>
								<div className="list-card-button-text text-stylized-14">
									view
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		)
	}
}
export default VenueList
