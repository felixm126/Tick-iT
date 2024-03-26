import {Routes, Route} from 'react-router-dom'
import EventList from './EventList'

function Main() {
	return (
		<>
			<Routes>
				<Route path='/' element={<EventList/>}/>
				<Route path='/events' element={<EventList/>}/>
			</Routes>
		</>
	)
}
export default Main
