import React, { Component } from 'react';
import GameReview from './GameReview.js';


class Reviews extends Component {

    render () {
      console.log(this.props.review)
        return this.props.reviews.map((review) => (
          <GameReview review={review}/>
        ));
      }

            
    //           this.state.reviews.map((review, _index) => (
    //             <GameReview username={review.username} title={review.title} review={review.review} />
    //               // {/* <Link to={'./ReviewsPage/' + this.fetchReviews }>Read this review...</Link> */}
    //             )
    //           );
    // }
  }

    export default Reviews;