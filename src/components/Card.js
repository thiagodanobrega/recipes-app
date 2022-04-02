import React from 'react';
import PropTypes from 'prop-types';

function Card({ name, image, typeCard, index }) {
  return (
    <div
      data-testid={ `${index}-${typeCard}` }
      className={ typeCard }
    >
      <img
        src={ image }
        alt=""
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>
        {name}
      </p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  typeCard: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
