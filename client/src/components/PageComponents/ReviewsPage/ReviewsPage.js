import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './reviews.js';
import './ReviewsPage.css';
class ReviewsPage extends Component {
  state = {
    reviews: [],
  }

  render() {
    console.log('fetching data');
    return (
      <div className="ReviewsPage">
        <header className="ReviewsPage-header">
        <p>{this.state.reviews}</p>
        </header>

      </div>
    );
  }
}

export default ReviewsPage;