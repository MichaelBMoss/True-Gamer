import React, { Component } from 'react';

//import components
import ContentItemSmall from '../../OtherComponents/ContentItemSmall/ContentItemSmall.js';

import './MainPage.css';

//props:
//  Games={}

class MainPage extends Component {
  render() {
    return (
      <div className="mpMainPage">
        <div className="mpContentOuterBox">
          <div className="mpContentInnerBox">
           {this.props.Games.map((game) => (
            <ContentItemSmall 
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
