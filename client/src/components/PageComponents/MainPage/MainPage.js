import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './MainPage.css';
class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <header className="MainPage-header">
          <p>
Main Page
          </p>
{/*          <Link to="/blog/">Blog</Link>
          <Link to="/write/">Write article</Link> */}
        </header>
      </div>
    );
  }
}

export default MainPage;
