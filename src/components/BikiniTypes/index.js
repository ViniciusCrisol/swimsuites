import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import { Container } from './styles';

export default function BikiniTypes() {
  return (
    <Container>
      <h1>New In</h1>
      <h1>Campaingn</h1>
      <h1>Collection</h1>
      <NavLink exact to="/shop">
        View all
      </NavLink>
      <br />
      <Link to="/">Swimwears</Link>
      <br />
      <Link to="/">Hats</Link>
      <br />
      <Link to="/">Shoes</Link>
      <br />
      <Link to="/">Bags</Link>
      <br />
      <Link to="/">Glasses</Link>
      <br />
      <Link to="/">Acessories</Link>
      <br />
      <Link to="/">Special Prices</Link>
    </Container>
  );
}
