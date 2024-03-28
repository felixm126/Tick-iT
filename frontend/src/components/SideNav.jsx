import {Link, useNavigate} from 'react-router-dom'

function SideNav({toggleSideNav}) {
	let navigate = useNavigate()

	return (
		<div className="sidenav">
			<div className="sidenav-header">
				<div className="sidenav-header-placeholder">O</div>
        		<Link to="/" className="sidenav-header-title">tikit</Link>
        		<div className="sidenav-header-button" onClick={toggleSideNav}>&times;</div>
			</div>
			<div className="sidenav-links">
				<Link to="/events" className="sidenav-link-1" onClick={toggleSideNav}>Browse Events</Link>
				<Link to="/venues" className="sidenav-link-1" onClick={toggleSideNav}>Browse Venues</Link>
				<div className="sidenav-link-2" onClick={toggleSideNav}>Change Location</div>
				<div className="sidenav-link-2" onClick={toggleSideNav}>Account</div>
				<div className="sidenav-link-3" onClick={toggleSideNav}>Help</div>
				<div className="sidenav-link-3" onClick={toggleSideNav}>About</div>
			</div>
		</div>
		
	)
}
export default SideNav
