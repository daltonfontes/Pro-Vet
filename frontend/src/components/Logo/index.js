import styled from 'styled-components';
import meuLogo from '../../assets/logo.png';


export const Logo = styled.img`

    width:300px;
    height:300px;
    border-radius:30px;
    background-image: url(${meuLogo});
    background-size: cover;
    background-repeat: no-repeat;
`;
