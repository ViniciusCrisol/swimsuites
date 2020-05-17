import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <section>
          <Link to="/shop">Catalog</Link>
          <span>Shipping and payment</span>
        </section>
        <section>
          <span>About us</span>
          <span>Contact</span>
        </section>
      </div>
    </Container>
  );
}

export default Header;
