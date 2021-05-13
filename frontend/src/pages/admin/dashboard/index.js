import React from 'react';

import styled from 'styled-components';

import {Logo} from '../../../components/Logo';
import Title from '../../../components/Title';
import bg from '../../../assets/bg.jpg';


function Dashboard() {
  return (
    <Wrapper>
    <SideBar>
      <Logo className='logo-nav' loading='lazy'></Logo>

      <a className='btn-animais' href='/animais'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vVww2aEwAZJttI75/pets-paw-sprwijrjtsvs80j51amsg.png" alt=""></img></a>

      <a className='btn-internacao' href='/internacao'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vVww2aEwAZJttI75/pets-paw-hospital-imv1pxpqu1qrzngn6e8pzk.png" alt=""></img></a>

      <a className='btn-banho-tosa' href='/banho-tosa'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vVww2aEwAZJttI75/pets-paw-soap-d4wexkdb2ggtidzffs8wom.png" alt=""></img></a>

      <a className='btn-agenda' href='/agenda'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4v6Vi2aEP2WvhjaSz/book-close-1-9xdk26nwc3uq8pk0gfuca.png" alt=""></img></a>

      <a className='btn-sair' href='/'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vpnJ2aEbmoJ4v9V7/login-2-hfrcvvuxy7vc0uuilv10d5.png" alt=""></img></a>

    </SideBar>
    <Logo className='logo-center' loading='lazy'></Logo>
    <Title>Seja Bem Vindo!</Title>
    </Wrapper>
  );
}


const Wrapper = styled.div`
display:flex;
align-items:center;
background:
linear-gradient(180deg, rgba(22, 135, 167, 0.79) 0%, rgba(22, 135, 167, 0.3) 100%),
url(${bg}), var(--cyan-800);
background-size:cover;

img.logo-center {
  margin-left:75vh;
}

h1 {
  padding-top: 435px;
  margin-left: -31vh;
  color: var(--white);
  font-weight: bold;
}
`;
const  SideBar= styled.nav`
width: 155px;
min-height: 100vh;
background: var(--cyan-500);
border-radius: 0px 30px 30px 0px;
display: flex;
flex-direction:column;
position:relative;

img.logo-nav {
  width:119px;
  height:119px;
  margin: 15px;
}

a {
  width:90px;
  height:90px;
  border-radius:20px;
  border:none;
  cursor:pointer;
  background:var(--white);
  margin-left: 30px;
  margin-bottom: 30px;
}

a img {
  width:45px;
  height:45px;
  margin:20px;
}
`;

export default Dashboard;