import React, { Component } from 'react';

import './ReviewsPage.css';

import Header from '../../OtherComponents/Header/Header.js';
import Forms from '../../OtherComponents/Forms/Forms.js';

class ReviewsPage extends Component {
  render() {
    return (
      <div className="rpReviewsPage">
        <Header />
        <Forms />
      </div>
    );
  }
}

export default ReviewsPage;
