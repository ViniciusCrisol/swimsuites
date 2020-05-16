import React from 'react';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <section>
          <span>Catalog</span>
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
