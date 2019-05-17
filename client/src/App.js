import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import MainPage from './components/PageComponents/MainPage/MainPage.js';
import ReviewsPage from './components/PageComponents/ReviewsPage/ReviewsPage.js';

class App extends Component {
  
  state = {
  	games: [],
  	covers: [],
  	ageRatings: [],
	}
  
	componentDidMount() {
		fetch("/games/")
			.then(response => response.json())
			.then(gamesData => {
				console.log("got games",gamesData);
//				console.log(Object.keys(data));
//				for (let object of gamesData) {
//				  if ( object.themes.includes(42) ) {
//				    console.log('contains 42');
//				  }
//				}
//				let tempIDs = []
//				for (let object of data) {
//				  tempIDs.push(object.id);
//				}
//				console.log(tempIDs);
//			let testobject = {name: 'mike', game: 'bike',};
//			testobject.number = '2'
			  fetch("/covers/")
	    	.then(response => response.json())
	    	.then(coversData => {
		    	console.log("got covers", coversData);
		    	let forbiddenGames = [];
		    	let acceptedGames = [];
		    	for (let object of gamesData) {
				    if (object.themes.includes(42)) {
				      forbiddenGames.push(gamesData.indexOf(object));
				    } else { 
				        acceptedGames.push(object);
				    }
				  }
          let i = 0;
          for (let object of coversData) {
            if (forbiddenGames.includes(coversData.indexOf(object)) === false) {
              acceptedGames[i].covers = object;
              i = (i + 1);
            }
          }
          console.log(acceptedGames);
//		    	let i = 1;
//		    	for (let item of coversData) {
//		    	  item.number = i;
//		    	  i = (i + 1);
//		    	}
//		    	i = 1;
//		    	for (let item of gamesData) {
//		    	  item.number = i;
//		    	  i = (i + 1);
//		    	}
		    	this.setState({
		    	  games: gamesData,
			    	covers: coversData,
		    	});
	    	});
	    });
  }
	
	sortData = () => {
    console.log('sorting');
	}
  
  render() {
    return (
      <div className="aApp">
        <nav className="aHeader">
          <div className="aLogoBox">
            <Link to="/" className="aLogo">True Gamer</Link>
          </div>
          <div className="aLinkBox">
            <Link to="/" className="aNavLink">Home</Link>
            <Link to="/ReviewsPage/" className="aNavLink">Reviews</Link>
          </div> {/* end LinkBox */}
        </nav>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/ReviewsPage/' component={ReviewsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
