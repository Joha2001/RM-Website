import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';
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
            <Link to="/Work" className='navbar-buttons'>
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