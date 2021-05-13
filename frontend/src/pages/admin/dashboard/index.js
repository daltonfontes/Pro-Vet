import React from 'react';

import styled from 'styled-components';
import Box from '../../../components/Box';

import {Logo} from '../../../components/Logo';
import bg from '../../../assets/bg.jpg';


function Dashboard() {
  return (
    <Wrapper>
    <SideBar>
      <Logo className='logo-nav' loading='lazy'></Logo>

      <a className='btn' href='/dashboard'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vF502aEbmo9ULirm/house-4-y5gv0gw6vmi6vaedsuj7.png" alt=""></img>Inicio</a>

      <a className='btn' href='/animais'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vVww2aEwAZJttI75/pets-paw-sprwijrjtsvs80j51amsg.png" alt=""></img>Animais</a>

      <a className='btn' href='/internacao'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vVww2aEwAZJttI75/pets-paw-hospital-imv1pxpqu1qrzngn6e8pzk.png" alt=""></img>Internação</a>

      <a className='btn' href='/banho-tosa'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vVww2aEwAZJttI75/pets-paw-soap-d4wexkdb2ggtidzffs8wom.png" alt=""></img>Banho&Tosa</a>
 
      <a className='btn' href='/agenda'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4v6Vi2aEP2WvhjaSz/book-close-1-9xdk26nwc3uq8pk0gfuca.png" alt=""></img>Agenda</a>

      <a className='btn' href='/'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vpnJ2aEbmoJ4v9V7/login-2-hfrcvvuxy7vc0uuilv10d5.png" alt=""></img>Sair</a>

    </SideBar>
      <Boxbar>
        <Card>
          <h1 className="card-number">0</h1>
          <hr className="card-line"></hr>
          <h1 className="card-text">Total Pacientes</h1>
        </Card>
        <Card>
          <h1 className="card-number">0</h1>
          <hr className="card-line"></hr>
          <h1 className="card-text">Animais Internados</h1>
        </Card>
        <Card>
          <h1 className="card-number">0</h1>
          <hr className="card-line"></hr>
          <h1 className="card-text">Animais Atendidos</h1>
        </Card>
        <Card>
          <h1 className="card-number">0</h1>
          <hr className="card-line"></hr>
          <h1 className="card-text">Banho&Tosa</h1>
        </Card>
      </Boxbar>
      <hr className="line-vertical"></hr>
    <Agenda>
      <h2 className="agenda-text">Agenda</h2>
      <hr className="agenda-line"></hr>
    </Agenda>  
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

hr.line-vertical {
  border: 1px ridge var(--white);
  height: 740px;
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

a.btn {
    text-align: center;
    font-size: 16px;
    color: var(--white);
    text-decoration: none;
    line-height: 1.5;
}
`;

const Boxbar =styled(Box)`
  display:flex;
  flex-wrap:wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:relative;
  min-height: 100vh;
  width:50%;
`;

const Card = styled(Box)`
background:var(--white);
width:250px;
height:250px;
border-radius:30px;
margin:25px;

  h1.card-number {
    font-size:4.5rem;
    color: var(--pear);
    text-align: center;
    margin-top:45px;
    line-height:20px;
    font-weight: 700;
  }

  hr.card-line {
    border: 1px solid var(--cyan-500);
    width:70px;
    margin: 40px 0 0 90px;
  }

  h1.card-text {
    font-size:1.7rem;
    text-align:center;
    margin-top:50px;
    color: var(--blue-800);
    font-weight: 600;

  }

`;

const Agenda = styled(Box)`
background:var(--white);
border-radius:15px;
margin-left:10vh;
width:500px;
height:640px;

h2.agenda-text {
  color:var(--black);
  font-size:1.5rem;
  font-weight: 700;
  margin-top:25px;
  margin-left:25px;
}

hr.agenda-line {
  border:1px solid var(--cyan-800);
  width:210px;
  margin-top:10px;
}
`;

export default Dashboard;