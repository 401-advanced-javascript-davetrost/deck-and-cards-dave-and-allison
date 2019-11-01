import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeckOfComps from './DeckOfComps';
import Card from '../components/Card';
import { getCharacters } from '../services/hey-arnold-api';

export default class Characters extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters({ count: this.props.count })
      .then(characters => {
        this.setState({ characters });
      });
  }

  render() {
    return (
      <DeckOfComps
        title="Characters"
        items={this.state.characters.map(character => ({
          ...character,
          title: character.name,
          content: `${character.name} has ${character._id}`
        }))}
        Component={Card}
      />
    );
  }
  
  static propTypes = {
    count: PropTypes.number
  }


}

