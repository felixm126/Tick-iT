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
		navigate(`/events/${searchBarText}`)
	}
	return (
		<div className="searchbar">
			<form className="searchbar-input" onSubmit={handleSubmit}>
				<input
					type="text"
					id="text"
					value={searchBarText}
					placeholder="Search events"
					onChange={handleChange}
				/>
				<button className="searchbar-button" type="submit">
					Search
				</button>
			</form>
		</div>
	)
}
export default SearchBar
