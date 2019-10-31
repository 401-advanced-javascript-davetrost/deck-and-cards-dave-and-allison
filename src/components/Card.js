import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ _id, title, image, content }) => (
  <div key={_id}>
    <header><h3>{title}</h3></header>
    <figure>
      <img src={image} alt={title} />
    </figure>
    {content}
  </div>
);

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string
};

export default Card;
