import React, { Component } from 'react';
//import { Link } from 'react-router-dom'

//props:
// SmallImage={}
// SmallName={}
// SmallSummary={}

import './ContentItemSmall.css';

class ContentItemSmall extends Component {
  render() {
    return (
      <div className="ContentItemSmallOuterBox">
          
          <img alt="" className="ContentItemSmallCoverImage"  src={"https://images.igdb.com/igdb/image/upload/t_1080p/" + this.props.SmallImage + ".jpg"} />
        <div className="ContentItemSmallText">
          <div className="ContentItemSmallGameName">
            <h2> {this.props.SmallName} </h2> 
          </div>
          <div className="ContentItemSmallSummary">
            <p> {this.props.SmallSummary} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentItemSmall;
