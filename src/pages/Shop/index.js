import React from 'react';

import { AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';

import MenuContainer from '../../components/Menu';
import BikiniTypes from '../../components/BikiniTypes';

import {
  Container,
  Wrapper,
  Header,
  ContainerItens,
  TextImages,
} from './styles';

import Img1 from '../../assets/images/VintageMe.jpg';

function Shop() {
  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <input type="text" placeholder="Search" />
            <div>
              <p>Sign&nbsp;in</p>
              <MenuContainer />
              <section>
                <AiOutlineSearch size={50} color="#3c879c" />
                <AiOutlineShopping size={50} color="#3c879c" />
              </section>
            </div>
          </Header>
          <ContainerItens>
            <BikiniTypes />
            <section>
              <img src={Img1} alt="Bikini" />
              <TextImages>
                <p>Vintage&nbsp;Me</p>
                <p>450&nbsp;$</p>
              </TextImages>
            </section>
          </ContainerItens>
        </Container>
      </Wrapper>
    </>
  );
}

export default Shop;
