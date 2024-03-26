import {Routes, Route} from 'react-router-dom'
import EventList from './EventList'

function Main() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<EventList/>}/>
				<Route path='/events' element={<EventList/>}/>
			</Routes>
		</div>
	)
}
export default Main
