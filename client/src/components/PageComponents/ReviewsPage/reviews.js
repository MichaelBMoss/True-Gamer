import React, { Component } from 'react';

class Reviews extends Component {
    state = {
      reviews: [],
    }
  
    componentDidMount() {
      this.fetchReviews();
    }
  
    fetchReviews() {
      console.log('Fetching data - review');
      fetch('gamer_review.json')
        .then(response => response.json())
        .then(data => {
          console.log('Got data back', data);
          this.setState({
            reviews: data.reviews,
          });
        });
    }

    render() {
        return (
          <div className="Reviews">
            <h1>Gamer Reviews</h1>
            {
              this.state.reviews.map((post, _index) => (
                <Gamer-Reviews username={post.username} title={post.title} review={post.review}>
                  {/* <Link to={'./ReviewsPage/' + this.fetchReviews }>Read this review...</Link> */}
                </Gamer-Reviews>
              ))
            }
          </div>
        );
      }
    }
    
    export default Reviews;
    
