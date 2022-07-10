import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="brand"><Link to="/">Luxum</Link></div>
        <div className="navbarLinks">
          <ul>
              <li><Link to="/apartments">Apartments</Link></li>
              <li><Link to="/houses">Houses</Link></li>
              <li><Link to="/lands">Lands</Link></li>
          </ul>
        </div>
        
        
    </div>
  )
}

export default Navbar