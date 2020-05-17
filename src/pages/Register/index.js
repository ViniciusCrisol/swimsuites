import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, Wrapper } from '../../components/Form';

import Header from '../../components/Header';

function Register() {
  return (
    <Wrapper>
      <Header />

      <Container>
        <Form action="">
          <h1>swimsuites</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button type="submit">register</button>
          <Link to="/sing-in">I already have an account !</Link>
        </Form>
      </Container>
    </Wrapper>
  );
}

export default Register;
