import React, {useState} from 'react';

import styled from 'styled-components';
import { SideBar } from '../../../../components/Sidebar';
import { Logo } from '../../../../components/Logo';

import { Button, Container, Divider, makeStyles, TextField, Typography, Grid } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import PetsIcon from '@material-ui/icons/Pets';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


function CadastrarUsuario() {
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

    const classes = useStyles();
    const initialState = {
        
    };
    const [values, setValues] = useState();

    const onSubmit = async (ev)=>{
        ev.preventDefault();
    const response = await fetch('http://localhost:5001/register', {
      method: 'POST',
      body: JSON.stringify({ values }),
      headers: new Headers({'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
    })
    if(response.status === 200){
      window.location.replace('http://localhost:3000/dashboard')
    }
    };

    const onChange = (ev)=>{
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
        
    }
    
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
            <Container onSubmit={onSubmit} component="form">
                <Typography
                    className={classes.title}
                >
                    Cadadastro de Usuário
                </Typography>
                <Divider
                    className={classes.hr}
                    light="true"
                />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.inputText}
                            required
                            id="Nome"
                            name="nome"
                            label="Nome Completo"
                            fullWidth
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            className={classes.inputText}
                            id="CRMV"
                            name="crmv"
                            label="CRMV"
                            fullWidth
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            id="CPF"
                            name="cpf"
                            label="CPF*"
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={3} >
                        <TextField
                            required
                            id="Telefone"
                            name="telefone"
                            label="Telefone"
                            fullWidth
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField required id="Funcao" name="Funcao" label="Função" fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="Acesso"
                            name="acesso"
                            label="Acesso"
                            fullWidth
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="E-mail"
                            fullWidth
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="senha"
                            name="senha"
                            label="Senha"
                            fullWidth
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item spacing={2}>
                        <Button className={classes.button} size="large" type="submit">Confirmar</Button>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
display:flex;
`;

export default CadastrarUsuario;