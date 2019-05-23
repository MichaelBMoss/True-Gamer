import React, { Component } from 'react';
import './Forms.css';

//props:
//  onChangeFormName={}
//  FormName={}
//  onChangeFormGame={}
//  FormGame={}
//  onChangeFormReviews={}
//  FormReviews={}
//  fetchPosts={}
//  submit={}

class Forms extends Component {
  state = {
    FormGame: '',
    FormName: '',
    FormReview: '',
    reviews: []
  }

  componentDidMount() {
	  this.props.fetchPosts();
  }

//  onChangeFormName = (ev) => {
//    this.setState({
//      FormName: ev.target.value,
//    });
//  }
  
//  onChangeFormGame = (ev) => {
//    this.setState({
//      FormGame: ev.target.value,
//    });
//  } 

//  onChangeFormReview = (ev) => {
//    this.setState({
//      FormReview: ev.target.value,
//    });
//  }

//  submit = () => {
//    const formData = {
//      FormName: this.state.FormName,
//      FormGame: this.state.FormGame,
//      FormReview: this.state.FormReview,
//    };
//    
//    fetch('/api/mongodb/TrueGamer/', {
//        method: 'POST',
//        headers: {'Content-Type': 'application/json'},
//        body: JSON.stringify(formData),
//      })
//      .then(response => response.json())
//      .then(data => {
//        console.log('Got this back', data);
//        this.fetchPosts();
//      });
//  }

//  fetchPosts = () => {
//    console.log('Fetching data from API');
//    fetch('/api/mongodb/TrueGamer/')
//      .then(response => response.json())
//      .then(data => {
//        console.log('Got data back', data);
//        let reverseReviews = data.reverse();
//        this.setState({
//          FormGame: '',
//          FormName: '',
//          FormReview: '',
//          reviews: reverseReviews,
//        });
//      });
//  }

  render() {
    return (
      <div className="Forms">
        <div className="FormsOuterBox">
          <div className="FormInnerBox">
            <h1>Write a Review</h1>
              <input
                className="FormNameBox"
                name="FormName"
                placeholder="Name"
                value={this.props.FormName}
                onChange={this.props.onChangeFormName}
              />
              <br/> <br/>
            <input
                className="FormGameBox"
                name="FormGame"
                placeholder="Game"
                value={this.props.FormGame}
                onChange={this.props.onChangeFormGame}
              />
            <textarea
                className="FormReviewBox"
                name="FormReview"
                placeholder="Review"
                value={this.props.FormReview}
                onChange={this.props.onChangeFormReview}
              />
            <button className="FormPostButton" onClick={this.props.submit}>Post</button>
          </div> {/* innerbox */}
        </div> {/* outerbox */}
      </div>
    );
  }
}

export default Forms;
