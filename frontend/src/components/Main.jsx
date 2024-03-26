import {Routes, Route} from 'react-router-dom'
import EventList from './EventList'
import EventDetails from './EventDetails'
import VenueList from './VenueList'
import VenueDetails from './VenueDetails'

function Main() {
	return (
		<>
			<Routes>
				<Route path='/' element={<EventList/>}/>
				<Route path='/events' element={<EventList/>}/>
				<Route path='/events/:id' element={<EventDetails/>}/>
				<Route path='/venues' element={<VenueList/>}/>
				<Route path='/venues/:id' element={<VenueDetails/>}/>

				<Route path='/event-details' element={<EventDetails/>}/>
				<Route path='/venue-details' element={<VenueDetails/>}/>
			</Routes>
		</>
	)
}
export default Main
