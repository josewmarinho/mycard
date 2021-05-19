import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   :root {
      --background: #8EE608;
      --red: #E52E4D;
      --green: #8EE608;
      --blue: #5429CC;
      --blue-ligth: #6933FF;
      --text-title: #363F5F;
      --body: #DEEEC5;
      --shape: #FFFFFF;
   }
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   html {
      @media(max-width: 1080px) {
         font-size: 93.75%;
      }
      @media(max-width:720px) {
         font-size: 87.5%;
      }
   }
   body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
   }
   body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
   }
   h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
   }
   button {
      cursor: pointer;
   }
   [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
   }
`