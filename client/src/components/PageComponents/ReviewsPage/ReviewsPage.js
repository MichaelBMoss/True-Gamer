import React, { Component } from 'react';
import './ReviewsPage.css';
import { BrowserRouter } from 'react-router-dom'
import reviews from './reviews.js';

console.log('beginning');
class ReviewsPage extends Component {
  state = {
    reviews: [],
  }

  // function () {
  //   console.log('rendering props?');

  //   this.fetchReviews({
  //     reviews: '',
  //     username: '',
  //     title: '',
  //   });
  // }
  // componentDidMount() {
  //   console.log("test");
  //   fetchReviews();
  // }

  componentDidMount() {
   console.log('Fetching data - review');
    fetch('/gamer_review.json')
    .then(response => response.json())
    .then(data => {
      console.log('hello i am data', data);
      this.setState({
        gameReviews: data.review,
      });
    });
  }
  //     console.log('Got this back', data);
  //       console.log('Got data back', 'reviews')
  //       for (let [key, value] of Object.entries('review'.username)) {
  //         console.log('key:', key, 'and the value:', value);
  //       this.setState({
  //         reviews: 'reviews',
  //         });
  //     };
  //   });
  //  }
 



  render() {
    console.log('Time to display data');
    return (
      <div className="ReviewsPage">
        <header className="ReviewsPage-header">
        {/* <reviews username="nadia" /> */}
          { /*<p>{ this.state.gameReviews }</p>*/}
           {/* {this.state.gameReviews.map((review, x) => (
             <gameReviews username={review.username} title={review.title} review={review.review}>
              </gameReviews> 
          )) */}
        </header>
      </div>
    );
  }
}

export default ReviewsPage;