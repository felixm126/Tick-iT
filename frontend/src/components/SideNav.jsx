import {Link, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket, faBuilding, faCalendar, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'

function SideNav({toggleSideNav}) {
	let navigate = useNavigate()

	return (
		<div className="sidenav">
			<div className="sidenav-header">
				<div className="sidenav-header-placeholder">O</div>
				<div className="sidenav-header-logo-set">
					<FontAwesomeIcon icon={faTicket} className="sidenav-ticket-icon" />
					<Link to="/" className="sidenav-header-title">tikit</Link>
				</div>
        		<div className="sidenav-header-button" onClick={toggleSideNav}>&times;</div>
			</div>
			<div className="sidenav-links">
				<Link to="/events" className="sidenav-link-1" onClick={toggleSideNav}>
					<FontAwesomeIcon icon={faCalendar} className="sidenav-link-icon"/>
					<div>Browse Events</div>
				</Link>
				<Link to="/venues" className="sidenav-link-1" onClick={toggleSideNav}>
					<FontAwesomeIcon icon={faBuilding} className="sidenav-link-icon"/>
					<div>Browse Venues</div>
				</Link>
				<div className="sidenav-link-2" onClick={toggleSideNav}>
					<FontAwesomeIcon icon={faLocationDot} className="sidenav-link-icon"/>
					<div>Change Location</div>
				</div>
				<div className="sidenav-link-2" onClick={toggleSideNav}>
					<FontAwesomeIcon icon={faUser} className="sidenav-link-icon"/>
					<div>Account</div>
				</div>
				<div className="sidenav-link-3" onClick={toggleSideNav}>Help</div>
				<div className="sidenav-link-3" onClick={toggleSideNav}>About</div>
			</div>
		</div>
		
	)
}
export default SideNav
