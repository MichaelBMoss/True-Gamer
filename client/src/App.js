import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import MainPage from './components/PageComponents/MainPage/MainPage.js';
import ReviewsPage from './components/PageComponents/ReviewsPage/ReviewsPage.js';
import WriteArticle from './components/PageComponents/WriteArticle.js';

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
      <div className="App">
        <nav className="App-navigation">
          <h1 className="App-title">True Gamer</h1>
          <Link to="/">Home</Link>
          <Link to="/ReviewsPage/">Reviews</Link>
          <Link to="/WriteArticlePage/">Write Reviews</Link>
        </nav>
      
        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/ReviewsPage/' component={ReviewsPage} />
            <Route exact path='/WriteArticlePage/' component={WriteArticle} />
          </Switch>
          </div>
        </div>
      
      
    );
  }
}

export default App;
