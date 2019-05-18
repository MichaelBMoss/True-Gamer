import React, { Component } from 'react';
import './WriteArticle.css';

class WriteArticle extends Component {
  state = {
    title: 'True Gamer',
    text: 'true gamer',
  }

  onChangeReview = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  }

  onChangeName = (ev) => {
    this.setState({
      title: ev.target.value,
    });
  }
  
  
  onChangeGame = (ev) => {
    this.setState({
      title: ev.target.value,
    });
  }


  submit = () => {
   console.log("games")
    const formData = {
      title: this.state.title,
      text: this.state.text,
     
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
      <div className="WriteArticle">
        <h1>Write an article</h1>
        <div className="flex-container">
        <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.onChangeName}
          
          />
        <br />
          <div>
        <input
            name="game"
            placeholder="Game"
            value={this.state.game}
            onChange={this.onChangeGame}
          />
        <br />
        </div>

        <textarea
            name="reviews"
            placeholder="Reviews"
            value={this.state.details}
            onChange={this.onChangeReview}
          />
          <div>
        </div>
        <br />
        

        <button onClick={this.submit}>Add to blog</button>
      </div>
      </div>

    );
  }
}

export default WriteArticle;
