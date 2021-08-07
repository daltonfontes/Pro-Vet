import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import styled from 'styled-components';
import { Logo } from '../../../components/Logo';
import { SideBar } from '../../../components/Sidebar';

import { Button, makeStyles } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import PetsIcon from '@material-ui/icons/Pets';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { userAuthenticate } from '../../../redux-flow/actions'


function Dashboard({userAuthenticate, data}) {
  
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
    </Wrapper>
  );
}
const Wrapper = styled.div`
display:flex;
align-items:center;

`;


const mapStateToProps = state => ({
  data: state.user
})

const mapDispatch = dispatch => bindActionCreators({
  userAuthenticate
}, dispatch)

export default connect(mapStateToProps, mapDispatch) (Dashboard);