import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import MainPage from './components/PageComponents/MainPage/MainPage.js';
import ReviewsPage from './components/PageComponents/ReviewsPage/ReviewsPage.js';

class App extends Component {
  
  state = {
  	apiData: [],
	}
  
	componentDidMount() {
		fetch("/api/some/example/route/")
			.then(response => response.json())
			.then(data => {
				console.log("got data", data);
				this.setState({
					apiData: data,
				});
			});
		console.log('fetch');
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
