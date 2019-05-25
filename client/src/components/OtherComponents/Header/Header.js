import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Header.css';
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="LogoBox">
          <Link to="/" className="Logo"><h1>True Gamer</h1></Link>
        </div>
        <div className="LinkBox">
          <Link to="/" className="NavLink">Home</Link>
          <Link to="/ReviewsPage/" className="NavLink">Reviews</Link>
        </div> {/* end LinkBox */}
      </div>
    );
  }
}

export default Header;
