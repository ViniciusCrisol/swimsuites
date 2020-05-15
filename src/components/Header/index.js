import React, { Component } from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import { Link } from 'react-router-dom';

import { MdMenu } from 'react-icons/md';

import { Container } from './styles';

import { MenuContainer } from '../Menu';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };
  }

  openMenu() {
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <>
        <MenuContainer>
          <CheeseburgerMenu
            isOpen={menuOpen}
            closeCallback={() => this.closeMenu()}
          >
            <div>
              <ul>
                <h1>SwimSuites</h1>
                <li>
                  <Link to="/" onClick={() => this.closeMenu()}>
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => this.closeMenu()}>
                    Shipping and payment
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => this.closeMenu()}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => this.closeMenu()}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </CheeseburgerMenu>
        </MenuContainer>
        <Container>
          <div>
            <button type="button" onClick={() => this.openMenu()}>
              <MdMenu color="#245e6f" size={50} />
            </button>

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
      </>
    );
  }
}

export default Header;
