import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, Wrapper } from '../../components/Form';

import Header from '../../components/Header';

function SingIn() {
  return (
    <Wrapper>
      <Header />

      <Container>
        <Form action="">
          <h1>swimsuites</h1>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button type="submit">sing in</button>
          <Link to="/register">Doesn&apos;t have an account yet ?</Link>
        </Form>
      </Container>
    </Wrapper>
  );
}

export default SingIn;
