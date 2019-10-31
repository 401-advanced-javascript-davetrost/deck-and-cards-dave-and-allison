import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeckOfComps from './DeckOfComps';
import Card from '../components/Card';
import { getGifs } from '../services/hey-arnold-api';

export default class Gifs extends Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    getGifs({ count: this.props.count })
      .then(gifs => {
        this.setState({ gifs });
      });
  }

  render() {
    return (
      <DeckOfComps
        title="GIFs"
        items={this.state.gifs.map(gif => ({ 
          ...gif, 
          title: gif._id
        }))}
        Component={Card}
      />
    );
  }
  
  static propTypes = {
    count: PropTypes.number
  }


}

