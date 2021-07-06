import React from 'react';

import styled from 'styled-components';
import Box from '../../../components/Box';

import { Logo } from '../../../components/Logo';


function Dashboard() {
  return (
    <Wrapper>
      <SideBar>
        <Logo className='logo-nav' loading='lazy'></Logo>

        <a className='btn' href='/dashboard' role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vF502aEbmo9ULirm/house-4-y5gv0gw6vmi6vaedsuj7.png" alt=""></img>Inicio</a>

        <a className='btn' href='/animais' role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vVww2aEwAZJttI75/pets-paw-sprwijrjtsvs80j51amsg.png" alt=""></img>Animais</a>

        <a className='btn' href='/internacao' role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vVww2aEwAZJttI75/pets-paw-hospital-imv1pxpqu1qrzngn6e8pzk.png" alt=""></img>Internação</a>

        <a className='btn' href='/' role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vpnJ2aEbmoJ4v9V7/login-2-hfrcvvuxy7vc0uuilv10d5.png" alt=""></img>Sair</a>

      </SideBar>
    </Wrapper>
  );
}


const Wrapper = styled.div`
display:flex;
align-items:center;
background:
linear-gradient(180deg, rgba(22, 135, 167, 0.79) 0%, rgba(22, 135, 167, 0.3) 100%),
background-size:cover;

hr.line-vertical {
  border: 1px ridge var(--white);
  height: 740px;
}

`;


const SideBar = styled.nav`
width: 155px;
min-height: 100vh;
background: var(--cyan-500);
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

a.btn {
    text-align: center;
    font-size: 16px;
    color: var(--white);
    text-decoration: none;
    line-height: 1.5;
}
`;

export default Dashboard;