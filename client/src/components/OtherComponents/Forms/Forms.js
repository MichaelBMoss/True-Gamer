import React, { Component } from 'react';
import './Forms.css';

class Forms extends Component {
  state = {
    FormGame: '',
    FormName: '',
    FormReview: '',
  }

  onChangeFormReview = (ev) => {
    this.setState({
      FormReview: ev.target.value,
    });
  }

  onChangeFormName = (ev) => {
    this.setState({
      FormName: ev.target.value,
    });
  }
  
  onChangeFormGame = (ev) => {
    this.setState({
      FormGame: ev.target.value,
    });
  } 

  submit = () => {
    const formData = {
      FormName: this.state.FormName,
      FormGame: this.state.FormGame,
      FormReview: this.state.FormReview,
    };
    fetch('/api/mongodb/blogposts/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to blog
        this.props.history.push('/blog/');
      });
  }


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
                            value={this.state.FormName}
                            onChange={this.onChangeFormName}
                          />
                          <br/> <br/>
                        <input
                            className="FormGameBox"
                            name="FormGame"
                            placeholder="Game"
                            value={this.state.FormGame}
                            onChange={this.onChangeForm}
                          />
                        <textarea
                            className="FormReviewBox"
                            name="FormReview"
                            placeholder="Review"
                            value={this.state.FormReview}
                            onChange={this.onChangeFormReview}
                          />
                        <button className="FormPostButton" onClick={this.submit}>Post</button>
          </div> {/* innerbox */}
        </div> {/* outerbox */}
      </div>
    );
  }
}

export default Forms;
