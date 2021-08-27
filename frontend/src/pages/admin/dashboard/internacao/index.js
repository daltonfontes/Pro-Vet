import React from 'react';

import styled from 'styled-components';
import Side from '../../Sidebar'
import { Container, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core/';




function CadastrarAnimais() {
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
    return (
        <Wrapper>
            <Side/>
            <Container component="form">
                <Typography
                    className={classes.title}
                >
                    Cadastro de Animais
                </Typography>
                <Divider
                    className={classes.hr}
                    light="true"
                />
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <TextField
                            className={classes.inputText}
                            required
                            id="Nome"
                            name="Nome"
                            label="Nome do Animal"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            className={classes.inputText}
                            id="Especie"
                            name="Especie"
                            label="Espécie"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            className={classes.inputText}
                            id="raca"
                            name="raca"
                            label="Raça"
                        />
                    </Grid>
                    <Grid item xs={3} >
                        <TextField
                            className={classes.inputText}
                            required
                            id="idade"
                            name="idade"
                            label="Idade"
                            fullWidth
                        />
                    </Grid>
                    <Typography
                        className={classes.title}
                    >
                        Cadastro do Dono
                    </Typography>
                    <Divider
                        className={classes.hr}
                        light="true"
                    />
                </Grid>
            </Container>
        </Wrapper>
    );
}
const Wrapper = styled.div`
display:flex;
align-items:center;

`;
export default CadastrarAnimais;