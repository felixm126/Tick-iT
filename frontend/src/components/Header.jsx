import { useState } from 'react'
import SearchBar from './SearchBar'
import SideNav from './SideNav'

function Header() {

	const [sideNav, openSideNav] = useState(false)
	const toggleSideNav = () => openSideNav(!sideNav)
	
	return (
		<div className="header">
			<div className="header-primary">
				<div className="sidenav-button-open" onClick={toggleSideNav}/>
				{sideNav ? <SideNav toggleSideNav={toggleSideNav}/> : null}
				<div className="header-app-title">tikit</div>
				<div className="cart-button-open"/>
			</div>
			<div className="header-search">
				<SearchBar/>
			</div>
		</div>
	)
}
export default Header
