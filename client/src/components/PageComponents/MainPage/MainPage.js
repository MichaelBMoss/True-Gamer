import React, { Component } from 'react';

//import components
import ContentItemSmall from '../../OtherComponents/ContentItemSmall/ContentItemSmall.js';

import './MainPage.css';

//props:
//  URLs={}

class MainPage extends Component {
  render() {
    return (
      <div className="mpMainPage">
        <div className="mpContentOuterBox">
          <div className="mpContentInnerBox">
           {this.props.URLs.map((address) => (
            <ContentItemSmall 
              SmallImage={address.coverURL}
            />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
