import styled from "styled-components";
import Button from '@material-ui/core/Button';

export const Btnlogin = styled(Button)`

    display:flex;
    height:55px;
    width:350px;
    background: var(--yellow);
    border:none;
    align-items:center;
    display:flex;
    justify-content:space-evenly;
    color: var(--black-50);
    font-size:1.5em;
    font-family: 'Patua One', cursive;;
    text-decoration:none;
    transition: filter .2s;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);

        &:hover {
            filter: brightness(0.95);
        }

`;

export default Button;