import styled from "styled-components";


export const Button = styled.button`
    border-radius: 20px;
    width: ${props => props.width};
    height: ${props => props.height};
`;

export const Btncreate = styled(Button)`
    
    display:flex;
    height:70px;
    width:350px;
    background: #1687A7;
    border:none;
    align-items:center;
    display:flex;
    justify-content:space-evenly;
    
    color: white;
    font-size:1.5em;
    font-family: 'Antic Slab', serif;
    text-decoration:none;
    transition: filter .2s;

    &:hover {
            filter: brightness(0.95);
        }
`;

export const Btnlogin = styled(Button)`

    display:flex;
    height:70px;
    width:350px;
    background: #276678;
    border:none;
    align-items:center;
    display:flex;
    justify-content:space-evenly;
    color: white;
    font-size:1.5em;
    font-family: 'Antic Slab', serif;
    text-decoration:none;
    transition: filter .2s;

        &:hover {
            filter: brightness(0.95);
        }

`;

export default Button;