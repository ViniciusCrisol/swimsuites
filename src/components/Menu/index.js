import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CheeseburgerMenu from 'cheeseburger-menu';

import { AiOutlineMenu } from 'react-icons/ai';

import { Container } from './styles';

class Menu extends Component {
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

  window() {
    if (this.window.width >= 630) {
      this.closeMenu();
    }
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <>
        <Container>
          <button type="button" onClick={() => this.openMenu()}>
            <AiOutlineMenu color="#245e6f" size={38} />
          </button>

          {this.window()}
          <CheeseburgerMenu
            transitionTime={0.5}
            isOpen={menuOpen}
            closeCallback={() => this.closeMenu()}
          >
            <div>
              <ul>
                <h1>swimsuites</h1>
                <li>
                  <Link to="/" onClick={() => this.closeMenu()}>
                    View all
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => this.closeMenu()}>
                    Swimwears
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => this.closeMenu()}>
                    Hats
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => this.closeMenu()}>
                    Shoes
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => this.closeMenu()}>
                    Bags
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => this.closeMenu()}>
                    Glasses
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => this.closeMenu()}>
                    Acessories
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => this.closeMenu()}>
                    Special Prices
                  </Link>
                </li>
              </ul>
            </div>
          </CheeseburgerMenu>
        </Container>
      </>
    );
  }
}

export default Menu;
