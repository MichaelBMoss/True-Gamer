import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import MainPage from './components/PageComponents/MainPage/MainPage.js';
import ReviewsPage from './components/PageComponents/ReviewsPage/ReviewsPage.js';

class App extends Component {
  
  state = {
  	games: [],
	}
  
	componentDidMount() {
		fetch("/games/")
			.then(response => response.json())
			.then(gamesData => {
					let forbiddenGames = [];
		    	let acceptedGames = [];
		    	for (let object of gamesData) {
				    if (object.themes.includes(42)) {
				      forbiddenGames.push(gamesData.indexOf(object));
				    } else { 
				        acceptedGames.push(object);
				    }
				  }
				  let acceptedGamesSlice = acceptedGames.slice(0,10);
				  let gamesIDArray = []
				  for (let game of acceptedGamesSlice) {
				    gamesIDArray.push(game.id)
				  }
				  let gameIDs = gamesIDArray.join(',');
			 fetch("/covers/?gameIds=" + gameIDs)
	    	.then(response => response.json())
	    	.then(coversData => {
          for (let object of coversData) {
            for (let item of acceptedGamesSlice) {
              if (object.id === item.cover) {
                item.coverURL = object.image_id;
              }
            }
          }
	    	  console.log('accepted games',acceptedGamesSlice);
		    	this.setState({
		    	  games: acceptedGamesSlice,
		    	});
		    	this.render();
	    	});
	    });
  }
  
  render() {
    return (
      <div className="aApp">
        <Switch>
          <Route
            exact path='/'
            render={(props) => <MainPage {...props} Games={this.state.games} />}
           />
          <Route exact path='/ReviewsPage/' component={ReviewsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
