import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, image, content }) => (
  <div>
    <header><h3>{title}</h3></header>
    <figure>
      <img src={image} alt={title} />
    </figure>
    {content && <p>{content}</p>}
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string
};

export default Card;
