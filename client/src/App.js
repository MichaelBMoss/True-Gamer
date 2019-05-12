import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import MainPage from './components/PageComponents/MainPage/MainPage.js';
import ReviewsPage from './components/PageComponents/ReviewsPage/ReviewsPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <h1 className="App-title">True Gamer</h1>
          <Link to="/">Home</Link>
          <Link to="/ReviewsPage/">Reviews</Link>
        </nav>

        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/ReviewsPage/' component={ReviewsPage} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
