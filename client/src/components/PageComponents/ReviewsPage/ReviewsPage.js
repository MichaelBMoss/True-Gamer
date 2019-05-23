import React, { Component } from 'react';

import './ReviewsPage.css';

import Header from '../../OtherComponents/Header/Header.js';
import Forms from '../../OtherComponents/Forms/Forms.js';

class ReviewsPage extends Component {

  state = {
    FormGame: '',
    FormName: '',
    FormReview: '',
    reviews: []
  }

  onChangeFormName = (ev) => {
    this.setState({
      FormName: ev.target.value,
    });
  }

  onChangeFormGame = (ev) => {
    this.setState({
      FormGame: ev.target.value,
    });
  } 

  onChangeFormReview = (ev) => {
    this.setState({
      FormReview: ev.target.value,
    });
  }
  
  submit = () => {
    const formData = {
      FormName: this.state.FormName,
      FormGame: this.state.FormGame,
      FormReview: this.state.FormReview,
    };
    
    fetch('/api/mongodb/TrueGamer/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);
        this.fetchPosts();
      });
  }

  fetchPosts = () => {
    console.log('Fetching data from API');
    fetch('/api/mongodb/TrueGamer/')
      .then(response => response.json())
      .then(data => {
        console.log('Got data back', data);
        let reverseReviews = data.reverse();
        this.setState({
          FormGame: '',
          FormName: '',
          FormReview: '',
          reviews: reverseReviews,
        });
      });
  }

  render() {
    return (
      <div className="rpReviewsPage">
        <Header />
          <Forms
            onChangeFormName={this.onChangeFormName}
            FormName={this.state.FormName}
            onChangeFormGame={this.onChangeFormGame}
            FormGame={this.state.FormGame}
            onChangeFormReview={this.onChangeFormReview}
            FormReview={this.state.FormReview}
            fetchPosts={this.fetchPosts}
            submit={this.submit}
          />
        <div className="rpOuterBox">
          <div className="rpInnerBox">
              <h1 className="ReviewsTitle">Reviews</h1>
              <div className="ReviewsBox">
                {this.state.reviews.map((review, index) => (
                  <div className="Review" key={index}>
                    <p> {review.FormName} </p>
                    <p> {review.FormGame} </p>
                    <p> {review.FormReview} </p>
                  </div>
              ))}
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsPage;
