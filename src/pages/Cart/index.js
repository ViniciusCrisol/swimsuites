import React from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total, Wrapper } from './styles';

import Header from '../../components/Header';

import img1 from '../../assets/images/MerryMe.jpg';
import img2 from '../../assets/images/Pinacolada.jpg';
import img3 from '../../assets/images/DotsBaby.jpg';

const cart = [
  {
    key: String(Math.random()),
    img: img1,
    title: 'Pinacolada',
    price: '500 $',
    amount: 2,
    subtotal: '1000 $',
  },
  {
    key: String(Math.random()),
    img: img2,
    title: 'Mellony',
    price: '450 $',
    amount: 2,
    subtotal: '900 $',
  },
  {
    key: String(Math.random()),
    img: img3,
    title: 'Dots Baby',
    price: '420 $',
    amount: 1,
    subtotal: '420 $',
  },
];

function Cart() {
  return (
    <Wrapper>
      <Header />

      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr>
                <td>
                  <img src={product.img} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.price}</span>
                </td>
                <td>
                  <div>
                    <button type="button">
                      <MdRemoveCircleOutline size={20} color="#3c879c" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button">
                      <MdAddCircleOutline size={20} color="#3c879c" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button type="button">
                    <MdDelete size={20} color="#3c879c" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
        <footer>
          <button type="button">Finalizar pedido</button>
          <Total>
            <span>TOTAL</span>
            <strong>2320,00 $</strong>
          </Total>
        </footer>
      </Container>
    </Wrapper>
  );
}

export default Cart;
