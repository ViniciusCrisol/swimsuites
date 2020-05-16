import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContentArea, ImageList } from './styles';

import Header from '../../components/Header';

import MainPhotos from '../../components/MainPhotos';

import img1 from '../../assets/images/MerryMe.jpg';
import img2 from '../../assets/images/Pinacolada.jpg';
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

function Home() {
  return (
    <Container>
      <Header />
      <ContentArea>
        <div>
          <h1>Choise&nbsp;your</h1>
          <section>
            <h1>best&nbsp;</h1>
            <h1>swimsuite!</h1>
          </section>
          <Link to="/shop">Go&nbsp;shopping</Link>
        </div>
        <ImageList>
          {items.map((item) => (
            <MainPhotos
              key={item.key}
              image={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
        </ImageList>
      </ContentArea>
    </Container>
  );
}

export default Home;
