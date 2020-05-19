import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing:border-box;
}

html, body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
background: #191920;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 14px Roboto, sans-serif;
}
button {
  cursor: pointer;
}
`;
