import React, { Component } from 'react';
import './WriteArticle.css';

class WriteArticle extends Component {
  state = {
    user: '',
    text: '',
    game: '',
    title: '',
  }

  onChangeUserName = (ev) => {
    this.setState({
      user: ev.target.value,
    });
  }

  onChangeReview = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  }

 
  
  onChangeGame = (ev) => {
    this.setState({
      game: ev.target.value,
    });
  }


  submit = () => {
    const formData = {
      title: this.state.title,
      text: this.state.text,
      game: this.state.game
     
    };
    
    
   console.log("games", formData);

    fetch('/api/mongodb/testCollection/', {
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
            placeholder="User Name"
            value={this.state.user}
            onChange={() => this.onChangeUserName()}
          
          />
          
        <br />

          <div>
        <input
            name="game"
            placeholder="Game"
            value={this.state.game}
            onChange={this.onChangeGame.bind(this)}
          />
        <br />
        </div>

        <textarea
            name="reviews"
            placeholder="Reviews"
            value={this.state.text}
            onChange={this.onChangeReview}
          />
          <div>
        </div>
        <br />
        

        <button onClick={() => this.submit()}>Add to blog reviews</button>
      </div>
      </div>

    );
  }
}

export default WriteArticle;
