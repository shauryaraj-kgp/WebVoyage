import logoWeb from './images/Screenshot 2024-05-16 at 11.05.43 PM.png'
import insta from './images/instagram.jpeg'
import gmail from './images/gmail.png'
import linkedin from './images/linkedin.jpeg'
import twitter from './images/twitter.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-up">
                <div className="footer-tab">
                    <h2>Main Menu</h2>
                    <Link to="/">Home</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/course/day-1">Course</Link>
                    <Link to="/progress">Progress</Link>
                </div>
                <div className="footer-tab">
                    <h2>Follow Us</h2>
                    <div className="footer-tab-links">
                        <a href="https://www.instagram.com/" target='blank'>
                            <img src={insta} alt="Insta" />
                        </a>
                        <a href="https://www.x.com/" target='blank'>
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="https://mail.google.com/" target='blank'>
                            <img src={gmail} alt="gmail" />
                        </a>
                        <a href="https://www.linkedin.com/" target='blank'>
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </div>
                </div>
                <div className="footer-tab">
                    <h2>Team WebVoyage Group</h2>
                    <p>Indian Institute of Technology, Kharagpur, India</p>
                </div>
            </div>
            <div className="footer-down">
                <img src={logoWeb} alt="logo" />
                <p>IIT KGP</p>
                <a href="https://www.instagram.com/" target='blank'>Contact Us</a>
            </div>
        </div>
    );
}

export default Footer;