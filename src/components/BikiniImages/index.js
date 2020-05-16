import React from 'react';
import PropTypes from 'prop-types';

import { Container, TextImages } from './styles';

export default function BikiniImages({ image, title, price }) {
  return (
    <Container>
      <img src={image} alt="Bikini" />
      <TextImages>
        <p>{title}</p>
        <p>{price}</p>
      </TextImages>

      <button type="button">Add to cart</button>
    </Container>
  );
}
BikiniImages.propTypes = {
  image: PropTypes.element.isRequired,
  title: PropTypes.element.isRequired,
  price: PropTypes.element.isRequired,
};
