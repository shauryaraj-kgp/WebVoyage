import { Link } from 'react-router-dom'
import logo from "./images/Screenshot 2024-05-16 at 11.05.43 PM.png"
import { useState } from 'react';

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="navbar-left">
                    <img src={logo} alt="Logo" />
                    <div className="navbar-name">
                        <p>WebVoyage</p>
                    </div>
                </div>
                <div className="navbar-right">
                    <div className={`nav-links ${isDropdownOpen ? 'open' : ''}`}>
                        <Link to='/'>Home</Link>
                        <Link to='/search'>Search</Link>
                        <Link to='/course/day-1'>Course</Link>
                        <Link to='/progress'>Progress</Link>
                    </div>
                    <button className="hamburger" onClick={toggleDropdown}>
                        &#9776;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;