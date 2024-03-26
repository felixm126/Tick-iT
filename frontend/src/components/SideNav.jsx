import {useNavigate} from 'react-router-dom'

function SideNav() {
	let navigate = useNavigate()

	return (
		<div className="sidenav">
			<div className="sidenav-header">
				<div className="sidenav-header-placeholder">O</div>
        		<div className="sidenav-title">Venyou</div>
        		<div className="sidenav-closebtn" onClick={toggleNavBar}>&times;</div>
			</div>
			<div className="sidenav-links">
				<div className="sidenav-link-1" onClick={toggleNavBar}>Browse Events</div>
				<div className="sidenav-link-1" onClick={toggleNavBar}>Browse Venues</div>
				<div className="sidenav-link-2" onClick={toggleNavBar}>Change Location</div>
				<div className="sidenav-link-2" onClick={toggleNavBar}>Account</div>
				<div className="sidenav-link-3" onClick={toggleNavBar}>Help</div>
				<div className="sidenav-link-3" onClick={toggleNavBar}>About</div>
			</div>
		</div>
		
	)
}
export default SideNav
