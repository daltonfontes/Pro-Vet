import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html, body {
        height: 100%;
        width: 100%;
        background-color: whitesmoke;
        font-family: 'Roboto Mono', monospace;
    }
`;

export default Base;