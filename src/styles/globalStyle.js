import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

#root{
  --colorPrimary: #ffbf00;
  --colorSecondary: #009cdd;
  --colorTerciaria: #eeeeee;
  --colorDisabled: #cccccc;
  --colorWhite: #ffffff;
  --colorBlack: #000000;
  --colorDark: #444444;
  --colorRed:  #D7235D;

}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html{
  font-size: 62.5%;
}

html, body, #root {
  height: 100vh;
  width: 100vw;
  background:#ffe4e4;
  overflow-x: hidden;

  body {
    -webkit-font-smoothing: antialiased;
     
  }

  body, input, button, textarea {
    font: 14px sans-serif;
  }  

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }  
}
`;
