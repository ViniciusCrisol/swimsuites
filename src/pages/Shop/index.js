import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';

import MenuContainer from '../../components/Menu';
import BikiniTypes from '../../components/BikiniTypes';
import BikiniImages from '../../components/BikiniImages';
import Footer from '../../components/Footer';

import {
  Container,
  Wrapper,
  Header,
  ContainerItens,
  BikiniProductsContainer,
} from './styles';

import FeaturedImage from '../../assets/images/MerryMe.jpg';

import img1 from '../../assets/images/Pinacolada.jpg';
import img2 from '../../assets/images/Mellony.jpg';
import img3 from '../../assets/images/DotsBaby.jpg';

const items = [
  {
    key: String(Math.random()),
    img: img1,
    title: 'Pinacolada',
    price: '500 $',
  },
  {
    key: String(Math.random()),
    img: img2,
    title: 'Mellony',
    price: '450 $',
  },
  {
    key: String(Math.random()),
    img: img3,
    title: 'Dots Baby',
    price: '420 $',
  },
];

function Shop() {
  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <input type="text" placeholder="Search" />
            <div>
              <Link to="/sing-in">Sign&nbsp;in</Link>
              <MenuContainer />
              <Link to="/cart">
                <AiOutlineShopping size={38} color="#3c879c" />
              </Link>
            </div>
          </Header>
          <ContainerItens>
            <BikiniTypes />
            <BikiniImages
              image={FeaturedImage}
              title="Vintage Me"
              price="450 $"
            />
          </ContainerItens>
          <BikiniProductsContainer>
            {items.map((item) => (
              <BikiniImages
                key={item.key}
                image={item.img}
                title={item.title}
                price={item.price}
              />
            ))}
          </BikiniProductsContainer>
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
}

export default Shop;
