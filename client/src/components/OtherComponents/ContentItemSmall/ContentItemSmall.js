import React, { Component } from 'react';
//import { Link } from 'react-router-dom'

//props:
//  SmallImage={}

import './ContentItemSmall.css';

class ContentItemSmall extends Component {
  render() {
    return (
      <div className="ContentItemSmallOuterBox">
          
          <img alt="" className="ContentItemSmallCoverImage"  src={"https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/" + this.props.SmallImage + ".jpg"} />
        <div className="ContentItemSmallText">
          <div className="ContentItemSmallGameName">
          </div>
          <div className="ContentItemSmallSummary">
          </div>
        </div>
      </div>
    );
  }
}

export default ContentItemSmall;
