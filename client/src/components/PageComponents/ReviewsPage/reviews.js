import React, { Component } from 'react';
import ReviewsPage from './ReviewsPage';

class reviews extends Component {

    render () {
        return (
          <div className="reviews">
            <h1>Gamer Reviews</h1>
            <h3> userName={this.props.username}</h3>
            <h2>game={this.props.game}</h2>
            <p>review={this.props.review}</p>
            </div>
        );
      }

            
              // this.state.reviews.map((post, _index) => (
              //   <Gamer-Reviews username={post.username} title={post.title} review={post.review}>
              //     {/* <Link to={'./ReviewsPage/' + this.fetchReviews }>Read this review...</Link> */}
              //   </Gamer-Reviews>
              // ))
            
        
      
    
    
  }
    export default reviews;
    
