import styled from 'styled-components';

export const SideBar = styled.nav`
width: 246px;
height: 100vh;
background: var(--blue-800);
display: flex;
flex-direction:column;
position:relative;

img.logo-nav {
  width:119px;
  height:119px;
  margin: 15px;
}

a {
  width:190px;
  height:50px;
  border-radius:10px;
  border:none;
  cursor:pointer;
  margin-left: 30px;
  margin-bottom: 30px;
}
`;

export default SideBar;