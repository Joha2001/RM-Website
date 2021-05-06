import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
// Nothing is changed here unless you want to add more pages
function Navigation() {
    return (
       <>
         <div className="navbar">
            <Link to="/" className='home'>
            Ratnajirao Mylavarapu
            </Link>
            <Link to="/About" className='navbar-buttons'>
                About
            </Link>
            <Link to="/WorkP" className='navbar-buttons'>
                Work
            </Link>
            <Link to="/Contact" className='navbar-buttons'>
                Contact
            </Link>
            </div>
       </>
    );
}
 
export default Navigation;