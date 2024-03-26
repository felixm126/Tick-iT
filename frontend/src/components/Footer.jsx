import GitHubButton from 'react-github-btn'

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-app-container">
				<div className="footer-app-title">Tikit</div>
				<GitHubButton href="https://github.com/felixm126/Tick-iT" className="footer-git-link"></GitHubButton>
			</div>
			<div className="footer-member-container">
				<div className="footer-member-name">Felix Man</div>
				<div className="footer-member-links">
					<GitHubButton href="https://github.com/felixm126" className="footer-git-link"></GitHubButton>
					<a href="https://www.linkedin.com/in/felix-man/">LinkedIn</a>
				</div>
			</div>
			<div className="footer-member-container">
				<div className="footer-member-name">Maddie Maz</div>
				<div className="footer-member-links">
					<GitHubButton href="https://github.com/maddiemaz" className="footer-git-link"></GitHubButton>
					<a href="https://www.linkedin.com/in/madeline-maslowsky/">LinkedIn</a>
				</div>
			</div>
			<div className="footer-member-container">
				<div className="footer-member-name">Wil Mckay</div>
				<div className="footer-member-links">
					<GitHubButton href="https://github.com/wilmckay" className="footer-git-link"></GitHubButton>
					<a href="https://github.com/wilmckay">LinkedIn</a>
				</div>
			</div>
		</footer>
	)
}
export default Footer
