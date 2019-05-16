import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './ReviewsPage.css';
class ReviewsPage extends Component {

  render() {
    console.log('fetching data');
    return (
      <div className="ReviewsPage">
        <header className="ReviewsPage-header">
          <p>Reviews Page={this.state.reviews}
          </p>
{/*          <Link to="/blog/">Blog</Link>
          <Link to="/write/">Write article</Link> */}
        </header>
      </div>
    );
  }
}

export default ReviewsPage;