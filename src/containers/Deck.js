import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Deck extends Component {

  render() {
    return (
      <section>
        <header>
          <h2>{this.props.title}</h2>
        </header>
        {this.props.children}
      </section>
    );
  }

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
  };
}

