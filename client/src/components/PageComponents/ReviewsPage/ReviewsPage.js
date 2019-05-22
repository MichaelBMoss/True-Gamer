import React, { Component } from 'react';
import './ReviewsPage.css';
import Reviews from './Reviews.js';
import { BrowserRouter } from 'react-router-dom'



console.log('beginning');
class ReviewsPage extends Component {
  state = {
    reviews: [{
      username: "n00b",
      "game": "Mortal Kombat 11",
      "review": ["MK11's version of the limited-time ladders seen in other NetherRealm games, which feature unique modifiers that can affect the playing field, combatants, and mechanics."]
  },
  {
      "username":"elit3",
      "game": "Mortal Kombat 11",
      "review": ["This game is always keeping me on my toes. My excitement level is through the roof."]
  },
  {
      "username": "blueFace",
      "game": "Mortal Kombat 11",
      "review": ["more straightforward single-player mode where you fight a series of opponents before eventually facing big boss Kronika."]
  },
  {
      "username": "TigerClaw",
      "game": "Mortal Kombat 11",
      "review": ["In addition to the game's story mode, MK11 sees the return of Klassic Towers"]
  },
  {
      "username": "L3thal",
      "game": "Mortal Kombat 11",
      "review": ["Makes me sad seeing NetherRealm go down the route of making unlocking items really grindy and tedious.'I thought Injustice 2 was pretty generous with their unlocks and the amount of currency given from just doing matches."]
  } ],
  }
//made the change above

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
      console.log('Submitted reviews', data);
      this.setState({
        GameReviews: data.review,
      });
    });
  }




  render() {
    console.log('Time to display data');
    return (
      <div className="ReviewsPage">
        <Reviews reviews={this.state.reviews} />
        {/* <reviews username="nadia" /> */}
          { /*<p>{ this.state.gameReviews }</p>*/}
           {/* {this.state.gameReviews.map((review, x) => (
             <gameReviews username={review.username} title={review.title} review={review.review}>
              </gameReviews> 
           )) */}

      </div>
    );
  }
}

export default ReviewsPage;