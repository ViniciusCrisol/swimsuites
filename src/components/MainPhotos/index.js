import React from 'react';
import PropTypes from 'prop-types';

export default function MainPhotos({ image, title, price }) {
  return (
    <div>
      <img src={image} alt="Bikini" />
      <h1>{title}</h1>
      <h3>{price}</h3>
    </div>
  );
}

MainPhotos.propTypes = {
  image: PropTypes.element.isRequired,
  title: PropTypes.element.isRequired,
  price: PropTypes.element.isRequired,
};
