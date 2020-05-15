import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
*{
  margin : 0;
  padding: 0;
  outline:0;
  box-sizing: border-box;
}

body{
  background: white ;
  -webkit-font-smoothing : antialiased !important;
}

body, input, button{
  font-size: 14px;
}

button{
  cursor: pointer;
  display: none;
  background: none;
  border: none;
}
`;
