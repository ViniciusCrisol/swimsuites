import React from 'react';

import { Container } from './styles';

const linkProject =
  'https://www.behance.net/gallery/96749097/Online-Store-of-swimwears?tracking_source=search_projects_recommended';
const linkProfile = 'https://www.behance.net/Che_Tatiana';
const linkPortfolio = 'https://viniciuscrisol.netlify.app/';

function Footer() {
  return (
    <Container>
      <div>
        <h1>Detalhes</h1>
        <p>
          Aplicação feita com base no design do projeto
          <a rel="noopener noreferrer" target="_blank" href={linkProject}>
            &nbsp;swimsuits&nbsp;
          </a>
          desenvolvido por
          <a href={linkProfile}>&nbsp;Tanya Chepel.</a>
        </p>
      </div>
      <div>
        <h1>Desenvolvido por:</h1>
        <ul>
          <h4>Vinícius Crisol</h4>
          <li>
            <p>vinicius.crisol@etec.sp.gov.br</p>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href={linkPortfolio}>
              Portfólio
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1>Ferramentas</h1>
        <ul>
          <h4>Principais tecnologias :</h4>
          <li>
            <p>ReactJs</p>
          </li>
          <li>
            <p>Styled Components</p>
          </li>
          <li>
            <p>Cheeseburger Menu</p>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Footer;
