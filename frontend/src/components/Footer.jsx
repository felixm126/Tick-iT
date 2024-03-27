import GitHubButton from 'react-github-btn'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faSquareGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-app-container">
				<div className="text-stylized-16">tikit</div>
				<FontAwesomeIcon icon={faGithub} href="https://github.com/felixm126/Tick-iT" className="footer-git-link-main"/>
			</div>
			<div className="footer-spacer"/>
			<div className="footer-member-container">
				<div className="text-body-12">Felix Man</div>
				<div className="footer-member-links">
					<FontAwesomeIcon icon={faSquareGithub} href="https://github.com/felixm126" className="footer-git-link"/>
					<FontAwesomeIcon icon={faLinkedin} href="https://www.linkedin.com/in/felix-man/" className="footer-linked-link"/>
				</div>
			</div>
			<div className="footer-member-container">
				<div className="text-body-12">Maddie Maz</div>
				<div className="footer-member-links">
					<FontAwesomeIcon icon={faSquareGithub} href="https://github.com/maddiemaz" className="footer-git-link"/>
					<FontAwesomeIcon icon={faLinkedin} href="https://www.linkedin.com/in/madeline-maslowsky/" className="footer-linked-link"/>
				</div>
			</div>
			<div className="footer-member-container">
				<div className="text-body-12">Wil Mckay</div>
				<div className="footer-member-links">
					<FontAwesomeIcon icon={faSquareGithub} href="https://github.com/wilmckay" className="footer-git-link"/>
					<FontAwesomeIcon icon={faLinkedin} href="https://www.linkedin.com/in/wilmckay/" className="footer-linked-link"/>
				</div>
			</div>
		</footer>
	)
}
export default Footer
