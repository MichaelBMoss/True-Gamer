import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class GameReview extends Component {

    render () {
        return(
            <div style={{backgroundColor: 'green', alignContent: 'align-left'}}>
                <p>username: {this.props.review.username}</p>
                <p>game: {this.props.review.game}</p>
                <p>review: {this.props.review.review}</p>
            </div>
        )
    }
}


export default GameReview;