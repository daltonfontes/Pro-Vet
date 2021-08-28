import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { Button, Container, Divider, Grid, makeStyles, withStyles, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Typography, Box, TextField } from '@material-ui/core/';
import Side from '../../Sidebar';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchAnimals } from '../../../../redux-flow/actions';
import './style.css';
import CardAnimal from './cardAnimal';

function Animais({ fetchAnimals, stateReducer }) {

    const history = useHistory();

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
        },
        hr: {
            marginBottom: '80px',
            border: '1px solid var(--black-50)'
        },
        button: {
            background: 'var(--yellow)',
            borderRadius: '30px',
            border: '2px solid var(--black)',
            fontFamily: 'Patua One'
        },
        search: {
            width: '645px',
            height: '50px'
        },
        container: {
            height: '55vh'
        }
    }));

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: 'var(--white-50)',
            color: 'var(--blue-500)',
            fontFamily: 'Patua One',
            fontSize: 25,
        },
        body: {
            fontSize: 14,
            backgroundColor: 'var(--white-50)',
            fontFamily: 'Patua One',
        },
    }))(TableCell);

    const classes = useStyles();
    const onClick = () => {
        history.push("/dashboard/create_animal")
    }
    let animais = [];

    useEffect(() => {
        console.log('fez o fetch')
        animais = fetchAnimals()
    }, [])

    return (
        <Wrapper>
            <Side />
            <Container className={classes.container}>
                <Box display="flex" justifyContent="center">
                    <TextField
                        className={classes.search}
                        label="Pesquisa"
                        margin="normal"
                        variant="outlined"
                    />
                </Box>
                <Box display="flex" flexDirection="row-reverse" marginBottom="-1.902rem">
                    <Button
                        component="button"
                        variant="contained"
                        className={classes.button}
                        size="small"
                        target="_parent"
                        onClick={onClick}
                    >Cadastrar Animais</Button>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Typography
                        className={classes.title}
                    >
                        Animais
                    </Typography>
                </Box>
                <Divider
                    className={classes.hr}
                    light="true"
                />
                <div className="Container_Card_Animais">
                    {animais.map((el) => (
                        console.log('el' ,el)
                        //<CardAnimal data={el}></CardAnimal>
                    ))}
                </div>
            </Container >
        </Wrapper >
    );
}
const Wrapper = styled.div`
display:flex;
align-items:center;

`;

const mapStateToProps = state => ({
    stateReducer: state.animals
});

const mapDispatch = dispatch => bindActionCreators({
    fetchAnimals
}, dispatch);


export default connect(mapStateToProps, mapDispatch)(Animais);