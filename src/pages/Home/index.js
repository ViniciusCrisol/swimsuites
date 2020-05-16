import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContentArea, Carousel } from './styles';

import Header from '../../components/Header';

import MainPhotos from '../../components/MainPhotos';

import Img1 from '../../assets/images/MerryMe.jpg';
import Img2 from '../../assets/images/Pinacolada.jpg';
import Img3 from '../../assets/images/DotsBaby.jpg';

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
        <Carousel>
          <MainPhotos Image={Img1} Title="Mary&nbsp;Me" Price="500$" />
          <MainPhotos Image={Img2} Title="Pinacolada" Price="500$" />
          <MainPhotos Image={Img3} Title="Dots&nbsp;Baby" Price="500$" />
        </Carousel>
      </ContentArea>
    </Container>
  );
}

export default Home;
