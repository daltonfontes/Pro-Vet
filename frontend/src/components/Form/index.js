import styled from 'styled-components';
import Box from '../Box';

export const FormSignUp = styled(Box)`
  width:50vw;
  min-height: 100vh;
  background:#276678;
  border-radius:40px 0px 0px 40px;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  margin-left:50%;
  position:absolute;
`;

export const FormSignIn = styled(Box).attrs({as:"form"})`

  width:50vw;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  position:absolute;

`;

export default FormSignUp;
