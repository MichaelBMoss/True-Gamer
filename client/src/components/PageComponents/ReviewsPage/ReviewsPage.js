import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import reviews from '/gamer_review.json';

import './ReviewsPage.css';
class ReviewsPage extends Component {
    state = {
      reviews: [
        { 
          id: ""
          username: "",
          date: "mydate1.toString()"
          _title: "",
          get title() {
            return this._title;
          },
          set title(value) {
            this._title = value;
          },
          review: "",


        }
      ]
    }
  render() {
    console.log('fetching data');
    return (
      <div className="ReviewsPage">
        <header className="ReviewsPage-header">
          <p>Reviews Page reviews={this.state.reviews}
          </p>
{/*          <Link to="/blog/">Blog</Link>
          <Link to="/write/">Write article</Link> */}
        </header>
      </div>
    );
  }
}

export default ReviewsPage;
