import React, { useState, useEffect } from 'react';

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
import { creatAnimal } from '../../../../redux-flow/actions';

function CadastrarAnimais({ creatAnimal, stateReducer }) {

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

    const [values, setValues] = useState();
    const [created , setCreated]= useState(false)
    const history = useHistory();
    const { success, loading } = stateReducer;

    const onChange = (ev) => {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = async (ev) => {
        ev.preventDefault();
        creatAnimal(values)
        setCreated(true)
    };

    useEffect(() => {
        if (created) {
            const timer = setTimeout(() => {
                history.push('/dashboard/cadastrar_animais')
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [created]);

    const classes = useStyles();
    return (
        <form onSubmit={onSubmit}>
            <Wrapper>
                <Side />
                <Container >
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
                                name="nome"
                                label="Nome do Animal"
                                fullWidth
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <TextField
                                className={classes.inputText}
                                id="Especie"
                                name="especie"
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
                                name="idade"
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
                        
                        <Grid item xs={3}>
                            <TextField
                                className={classes.inputText}
                                id="pelagem"
                                name="pelagem"
                                label="Pelagem"
                                required
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                className={classes.inputText}
                                id="Peso"
                                name="peso"
                                label="Peso"
                                required
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={5} >
                            <InputLabel
                                required
                                id="sexo"
                                name="genero"
                                label="sexo"
                                 >Sexo</InputLabel>
                            <Select onChange={onChange} name="sexo" defaultValue="" id="grouped-select">
                                <MenuItem value={'macho'}>Macho </MenuItem>
                                <MenuItem value={'femea'}>Femea</MenuItem>
                            </Select>
                        </Grid>

                        <Grid item xs={6} >
                            <InputLabel
                                required
                                id="temperamento"
                                name="temperamento"
                                label="Temperamento"
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


const mapStateToProps = state => ({
    stateReducer: state.animals
});

const mapDispatch = dispatch => bindActionCreators({
    creatAnimal
}, dispatch);

export default connect(mapStateToProps, mapDispatch)(CadastrarAnimais);