import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    :root 
{
    --white: #FFF; 
    --cyan-500: #276678;
    --cyan-800: #1687A7;
}

@media (max-width: 1080px) 
{
    html
    {
        font-size: 93.75%;
    }
}

@media (max-width: 1366px) {
    html {
      font-size: 80%;
    }
  }

@media (max-width: 720px) 
{
    html
    {
        font-size: 87.5%;
    }
}

    html, body {
        background-color: var(--white);
        font-family: 'Roboto Mono', monospace;
    }
`;

export default Base;