import GitHubButton from 'react-github-btn'

function Footer() {
	return (
		<footer className="github">
			<div>
				<h4>Tikit</h4>
				<GitHubButton href="https://github.com/felixm126/Tick-iT"></GitHubButton>
			</div>
			<div>
				<h4>Felix Man</h4>
				<>
					<GitHubButton href="https://github.com/felixm126"></GitHubButton>
					<a href="https://www.linkedin.com/in/felix-man/">LinkedIn</a>
				</>
			</div>
			<div>
				<h4>Maddie Maz</h4>
				<>
					<GitHubButton href="https://github.com/maddiemaz"></GitHubButton>
					<a href="https://www.linkedin.com/in/madeline-maslowsky/">LinkedIn</a>
				</>
			</div>
			<div>
				<h4>Wil Mckay</h4>
				<>
					<GitHubButton href="https://github.com/wilmckay"></GitHubButton>
					<a href="https://github.com/wilmckay">LinkedIn</a>
				</>
			</div>
		</footer>
	)
}
export default Footer
