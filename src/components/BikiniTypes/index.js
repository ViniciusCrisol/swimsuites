import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export default function BikiniTypes() {
  return (
    <Container>
      <h1>New In</h1>
      <h1>Campaingn</h1>
      <h1>Campaingn</h1>
      <NavLink exact to="/shop">
        View all
      </NavLink>
      <br />
      <NavLink exact to="/">
        Swimwears
      </NavLink>
      <br />
      <NavLink exact to="/">
        Hats
      </NavLink>
      <br />
      <NavLink exact to="/">
        Shoes
      </NavLink>
      <br />
      <NavLink exact to="/">
        Bags
      </NavLink>
      <br />
      <NavLink exact to="/">
        Glasses
      </NavLink>
      <br />
      <NavLink exact to="/">
        Acessories
      </NavLink>
      <br />
      <NavLink exact to="/">
        Special Prices
      </NavLink>
    </Container>
  );
}
