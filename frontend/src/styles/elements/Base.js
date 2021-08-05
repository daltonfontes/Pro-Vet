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
    --white-50:#BDD2D9;
    --yellow: #D4D11E;
    --blue-500: #226677;
    --blue-800:#042938;
    --black-50:#42484A;
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
        font: 500 1rem 'Patua One', cursive;
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