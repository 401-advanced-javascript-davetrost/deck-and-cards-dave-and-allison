import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DeckOfComps extends Component {

  render() {
    const elements = this.props.items.map((item, i) => (
      <this.props.Component
        key={item._id || i}
        {...item} />
    ));

    return (
      <section>
        <header>
          <h2>{this.props.title}</h2>
        </header>
        {elements}
      </section>
    );
  }

  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
  };
}
