import { useState } from 'react'
import SearchBar from './SearchBar'
import SideNav from './SideNav'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faBasketShopping, faBagShopping} from '@fortawesome/free-solid-svg-icons'

function Header() {

	const [sideNav, openSideNav] = useState(false)
	const toggleSideNav = () => openSideNav(!sideNav)
	
	return (
		<div className="header">
			<div className="header-primary">
				<div className="text-title-26 sidenav-button-open" onClick={toggleSideNav}>☰</div>
				{sideNav ? <SideNav toggleSideNav={toggleSideNav}/> : null}
				<Link to="/" className="text-stylized-34 header-app-title">tikit</Link>
				<FontAwesomeIcon icon={faBagShopping} className="text-title-26 cart-button-open"/>

			</div>
			<div className="header-search">
				<SearchBar/>
			</div>
		</div>
	)
}
export default Header
