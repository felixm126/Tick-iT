import { Routes, Route } from 'react-router-dom'
import EventList from './EventList'
import EventDetails from './EventDetails'
import VenueList from './VenueList'
import VenueDetails from './VenueDetails'
// import AddEventPage from '../pages/AddEventPage'
import AddEventForm from './AddEventForm'
import HomePage from '../pages/HomePage'
import UpcomingEvents from './UpcomingEvents'

function Main() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/events" element={<EventList />} />
				<Route path="/events/:id" element={<EventDetails />} />
				<Route path="/venues" element={<VenueList />} />
				<Route path="/venues/:id" element={<VenueDetails />} />
				<Route path="/event-details" element={<EventDetails />} />
				<Route path="/venue-details" element={<VenueDetails />} />
				<Route path="/addevent" element={<AddEventForm />} />
				<Route path="/upcomingevents" elemennt={<UpcomingEvents />} />
			</Routes>
		</main>
	)
}
export default Main
