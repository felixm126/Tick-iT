import {useNavigate} from 'react-router-dom'

function SideNav({toggleSideNav}) {
	let navigate = useNavigate()

	return (
		<div className="sidenav">
			<div className="sidenav-header">
				<div className="sidenav-header-placeholder">O</div>
        		<div className="sidenav-header-title">tikit</div>
        		<div className="sidenav-header-button" onClick={toggleSideNav}>&times;</div>
			</div>
			<div className="sidenav-links">
				<div className="sidenav-link-1" onClick={toggleSideNav}>Browse Events</div>
				<div className="sidenav-link-1" onClick={toggleSideNav}>Browse Venues</div>
				<div className="sidenav-link-2" onClick={toggleSideNav}>Change Location</div>
				<div className="sidenav-link-2" onClick={toggleSideNav}>Account</div>
				<div className="sidenav-link-3" onClick={toggleSideNav}>Help</div>
				<div className="sidenav-link-3" onClick={toggleSideNav}>About</div>
			</div>
		</div>
		
	)
}
export default SideNav
