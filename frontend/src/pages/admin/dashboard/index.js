import React from 'react';

import styled from 'styled-components';
import { Logo } from '../../../components/Logo';
import { SideBar } from '../../../components/Sidebar';

import { Button, makeStyles } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import PetsIcon from '@material-ui/icons/Pets';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';



function Dashboard() {
  const useStyles = makeStyles((theme) => ({
    font: {
      fontFamily: 'Patua One',
      fontSize: '12px',
    },
    bottom: {
      fontFamily: 'Patua One',
      fontSize: '12px',
      marginTop: '300px',
    }
  }));

  const classes = useStyles();
  return (
    <Wrapper>
      <SideBar>
        <Logo className='logo-nav' loading='lazy'></Logo>

        <Button
          className={classes.font}
          size="medium"
          component="button"
          href="/dashboard"
          variant="contained"
          tabIndex="1"
          startIcon={<HomeIcon />}
        >
          Inicio
        </Button>

        <Button
          className={classes.font}
          size="medium"
          component="button"
          target="_parent"
          href="../dashboard/cadastrar_animais"
          variant="contained"
          tabIndex="2"
          startIcon={<PetsIcon />}
        >
          Animais
        </Button>

        <Button
          className={classes.font}
          size="medium"
          component="button"
          href="../dashboard/internacao"
          target="_parent"
          variant="contained"
          tabIndex="3"
          startIcon={<LocalPharmacyIcon />}
        >
          Internação
        </Button>

<<<<<<< HEAD
      <a className='btn-animais' href='/animais'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vVww2aEwAZJttI75/pets-paw-sprwijrjtsvs80j51amsg.png" alt=""></img></a>

      <a className='btn-internacao' href='/internacao'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vVww2aEwAZJttI75/pets-paw-hospital-imv1pxpqu1qrzngn6e8pzk.png" alt=""></img></a>

      <a className='btn-banho-tosa' href='/banho-tosa'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vVww2aEwAZJttI75/pets-paw-soap-d4wexkdb2ggtidzffs8wom.png" alt=""></img></a>

      <a className='btn-agenda' href='/agenda'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4v6Vi2aEP2WvhjaSz/book-close-1-9xdk26nwc3uq8pk0gfuca.png" alt=""></img></a>

      <a className='btn-sair' href='/'role='button'><img src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_mRu4pQJ4vpnJ2aEbmoJ4v9V7/login-2-hfrcvvuxy7vc0uuilv10d5.png" alt=""></img></a>

    </SideBar>
    <Logo className='logo-center' loading='lazy'></Logo>
    <Title>Seja Bem Vindo!</Title>
=======
        <Button
          className={classes.font}
          size="medium"
          component="button"
          target="_parent"
          href="../dashboard/cadastrar_usuario"
          variant="contained"
          tabIndex="4"
          startIcon={<PersonAddIcon />}
        >
          Cadastrar Usuário
        </Button>

        <Button
          className={classes.bottom}
          size="medium"
          component="button"
          href="/"
          variant="contained"
          tabIndex="5"
          startIcon={<ExitToAppIcon />}
        >
          Sair
        </Button>
      </SideBar>
>>>>>>> development
    </Wrapper>
  );
}
const Wrapper = styled.div`
display:flex;
align-items:center;

<<<<<<< HEAD
img.logo-center {
  margin-left:75vh;
}

h1 {
  padding-top: 435px;
  margin-left: -31vh;
  color: var(--white);
  font-weight: bold;
}
=======
>>>>>>> development
`;
export default Dashboard;