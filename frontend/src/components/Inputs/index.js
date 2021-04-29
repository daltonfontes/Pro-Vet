import styled from 'styled-components';

const Inputs = styled.input`
    background: var(--white);
    border: 1px solid var(--cyan-800);
    box-sizing: border-box;
    border-radius: 15px;
    text-align:center;
`;

export const InputPass = styled(Inputs).attrs({type:"password"})`
    width: 350px;
    height: 60px;
`;

export const InputEmail = styled(Inputs).attrs({type:"email"})`

    width: 350px;
    height: 60px;

`;

export default Inputs;