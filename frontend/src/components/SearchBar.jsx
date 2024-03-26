import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar() {
	const [searchBarText, setSearchBarText] = useState('')
	const navigate = useNavigate()

	const handleChange = (e) => {
		setSearchBarText(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		// TODO: Add in navigate url endpoint
		// navigate()
	}
	return (
		<div className="searchbar">
			<form on submit={handleSubmit}>
				<input
					type="text"
					id="text"
					value={searchBarText}
					placeholder="Search events"
					onChange={handleChange}
				/>
				<button type="submit">Search</button>
			</form>
		</div>
	)
}
export default SearchBar