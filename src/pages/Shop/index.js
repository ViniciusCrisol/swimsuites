import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CheeseburgerMenu from 'cheeseburger-menu';

import { MdShoppingBasket, MdSearch, MdMenu } from 'react-icons/md';

import { MenuContainer } from '../../components/Menu';
import BikiniTypes from '../../components/BikiniTypes';

import {
  Container,
  Wrapper,
  Header,
  ContainerItens,
  TextImages,
} from './styles';

import Img1 from '../../assets/images/VintageMe.jpg';

class Shop extends Component {
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

        <Wrapper>
          <Container>
            <Header>
              <input type="text" placeholder="Search" />
              <div>
                <button type="button" onClick={() => this.openMenu()}>
                  <MdMenu color="#245e6f" size={50} />
                </button>

                <p>Sign in</p>
                <section>
                  <MdSearch size={50} color="#3c879c" />
                  <MdShoppingBasket size={50} color="#3c879c" />
                </section>
              </div>
            </Header>
            <ContainerItens>
              <BikiniTypes />
              <section>
                <img src={Img1} alt="Bikini" />
                <TextImages>
                  <p>Vintage Me</p>
                  <p>450 $</p>
                </TextImages>
              </section>
            </ContainerItens>
          </Container>
        </Wrapper>
      </>
    );
  }
}

export default Shop;
