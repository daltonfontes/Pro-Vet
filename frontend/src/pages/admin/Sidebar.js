import React from 'react';
import { Link } from 'react-router-dom'
import { SideBar } from '../../components/Sidebar';
import { Logo } from '../../components/Logo';
import { Button, Container, Divider, makeStyles, TextField, Typography, Grid } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import PetsIcon from '@material-ui/icons/Pets';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const Side = () => {
    const useStyles = makeStyles((theme) => ({
        font: {
            fontFamily: 'Patua One',
            fontSize: '12px',
        },
        bottom: {
            fontFamily: 'Patua One',
            fontSize: '12px',
            marginTop: '300px',
        },
        title: {
            fontSize: '30px',
            fontFamily: 'Patua One',
            color: 'var(--blue-500)',
            position: 'absolute',
            marginTop: '180px'
        },
        span: {
            fontSize: '20px',
            marginTop: '10px'
        },

        hr: {
            marginTop: '230px',
            border: '1px solid var(--black-50)'
        },
        inputText: {
            fontSize: '22px',
            fontFamily: 'Patua One',
            marginTop: '15px'
        },

        button: {
            background: 'var(--yellow)',
            width: '188px',
            height: '50px',
            borderRadius: '30px',
            border: '2px solid var(--black)',
            fontFamily: 'Patua One'
        }
    }));

    const classes = useStyles()

    return (
        <SideBar>
            <Logo className='logo-nav' loading='lazy'></Logo>

            <Link to="/dashboard">
                <Button
                    className={classes.font}
                    size="medium"
                    component="button"
                    variant="contained"
                    tabIndex="1"
                    startIcon={<HomeIcon />}
                >
                    Inicio
                </Button>
            </Link>


            <Link to='/dashboard/cadastrar_animais' >
                <Button
                    className={classes.font}
                    size="medium"
                    component="button"
                    target="_parent"
                    variant="contained"
                    tabIndex="2"
                    startIcon={<PetsIcon />}
                >
                    Atendimento
                </Button>
            </Link >

            <Link to="/dashboard/internacao">
                <Button
                    className={classes.font}
                    size="medium"
                    component="button"
                    target="_parent"
                    variant="contained"
                    tabIndex="3"
                    startIcon={<LocalPharmacyIcon />}
                >
                    Internação
                </Button>
            </Link>

            <Link to="/dashboard/cadastrar_pessoas">
                <Button
                    className={classes.font}
                    size="medium"
                    component="button"
                    target="_parent"
                    variant="contained"
                    tabIndex="4"
                    startIcon={<PersonAddIcon />}
                >
                    Cadastrar Pessoas
                </Button>
            </Link>

            <Link to="/dashboard/cadastrar_usuario">
                <Button
                    className={classes.bottom}
                    size="medium"
                    component="button"
                    target="_parent"
                    
                    variant="contained"
                    tabIndex="5"
                    startIcon={<PersonAddIcon />}
                >
                    Cadastrar Usuário
                </Button>
            </Link>

            <Link to="/">
                <Button
                    className={classes.bottom}
                    size="medium"
                    component="button"
                    variant="contained"
                    tabIndex="6"
                    startIcon={<ExitToAppIcon />}
                >
                    Sair
                </Button>
            </Link>

        </SideBar>
    )
}

export default Side;