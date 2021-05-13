import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    :root 
{
    --white: #E9EFF1; 
    --cyan-500: #276678;
    --cyan-800: #1687A7;
    --pear: #C9DC23;
    --blue-800: #082A38;
    --black: #000000;
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
    body {
        background-color: var(--white);
    }

    body, textarea, input, button{
        font: 500 1rem Antic Slab, serif;
    }
    h1
    {
        font-size: 2rem;
    }

    h2
    {
        font-size: 1.5rem;
    }

    button
    {
        cursor: pointer;
    }
`;

export default Base;