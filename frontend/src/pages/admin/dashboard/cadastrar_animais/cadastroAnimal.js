import React, { useState } from 'react';

import styled from 'styled-components';

import { Button, Container, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core/';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { ToastContainer, toast } from 'react-toastify';
import Side from '../../Sidebar'
import './style.css';

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
    const [values, setValues] = useState({});
    const onChange = (ev) => {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
        console.log({ ...values })
    };

    const onSubmit = async (ev) => {
        ev.preventDefault();

    };
    const classes = useStyles();
    return (
        <form onSubmit={onSubmit}>
            <Wrapper>
                <Side />
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
                        <Grid item xs={5}>
                            <TextField
                                className={classes.inputText}
                                required
                                id="Nome"
                                name="Nome"
                                label="Nome do Animal"
                                fullWidth
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <TextField
                                className={classes.inputText}
                                id="Especie"
                                name="Especie"
                                label="Espécie"
                                fullWidth
                                required
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <TextField
                                className={classes.inputText}
                                id="Idade"
                                name="Idade"
                                label="Idade"
                                required
                                fullWidth
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <TextField
                                className={classes.inputText}
                                id="raca"
                                name="raca"
                                label="Raça"
                                required
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={3} >
                            <InputLabel
                                required
                                id="temperamento"
                                name="sexo"
                                label="sexo"
                                fullWidth >Sexo</InputLabel>
                            <Select onChange={onChange} name="sexo" defaultValue="" id="grouped-select">
                                <MenuItem value={'macho'}>Macho </MenuItem>
                                <MenuItem value={'femea'}>Femea</MenuItem>
                            </Select>
                        </Grid>

                        <Grid item xs={3} >
                            <InputLabel
                                required
                                id="temperamento"
                                name="temperamento"
                                label="Temperamento"
                                fullWidth
                                onChange={onChange}
                            >Temperamento</InputLabel>
                            <Select onChange={onChange} name="temperamento" defaultValue="" id="grouped-select">
                                <MenuItem value={'calmo'}>Calmo </MenuItem>
                                <MenuItem value={'bravo'}>Bravo</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item spacing={2}>
                            <Button className={classes.button} size="large" type="submit">Confirmar</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Wrapper>
            <ToastContainer />
        </form>
    );
}
const Wrapper = styled.div`
display:flex;

`;
export default CadastrarAnimais;