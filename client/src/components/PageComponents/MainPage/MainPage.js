import React, { Component } from 'react';

//import components
import ContentItemSmall from '../../OtherComponents/ContentItemSmall/ContentItemSmall.js';
import Header from '../../OtherComponents/Header/Header.js';

import './MainPage.css';

//props:
//  Games={}

class MainPage extends Component {

  render() {
    return (
      <div className="mpMainPage">
        <Header />
        <div className="mpContentOuterBox">
          <div className="mpContentInnerBox">
           {this.props.Games.map((game, index) => (
            <ContentItemSmall 
              key={index}
              SmallImage={game.coverURL}
              SmallName={game.name}
              SmallSummary={game.summary}
            />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
