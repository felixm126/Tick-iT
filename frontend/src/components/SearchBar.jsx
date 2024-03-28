import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
// import EventList from './EventList'

function SearchBar() {
	const [searchBarText, setSearchBarText] = useState('')
	const navigate = useNavigate()
	const [events, setEvents] = useState([])

	useEffect(() => {
		const getEvents = async () => {
			const response = await axios.get(`http://localhost:8000/events/`)
			setEvents(response.data)
		}
		getEvents()
	}, [])

	const handleChange = (e) => {
		setSearchBarText(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const searchedEvent = events.find((event) =>
			event.event_name.toLowerCase().includes(searchBarText.toLowerCase())
		)

		if (searchedEvent && searchedEvent.venue_id) {
			navigate(`/events/${searchedEvent.venue_id}`)
		}
	}

	return (
		<div className="searchbar">
			<form className="searchbar-form" onSubmit={handleSubmit}>
				<input
					className="searchbar-input"
					type="text"
					id="searchEvent"
					value={searchBarText}
					placeholder="search events"
					onChange={handleChange}
				/>
				<button className="searchbar-button" type="submit">
					search
				</button>
			</form>
		</div>
	)
}
export default SearchBar
