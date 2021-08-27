import React, { useState }  from 'react';

import styled from 'styled-components';
import { Button, Container, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core/';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { ToastContainer, toast } from 'react-toastify';
import Side from '../../Sidebar'


function CadastrarPessoas() {
    
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
        console.log({...values})
      };

    const onSubmit = async (ev) => {
        ev.preventDefault();
       
      };
    const classes = useStyles();
    return (
        <form onSubmit={onSubmit}>
        <Wrapper>
           <Side/>
            <Container component="form">
                <Typography className={classes.title}> Cadastro do Dono</Typography>
                <Divider className={classes.hr} light="true" />
                <Grid container spacing={2}>

                    <Grid item xs={3}>
                        <TextField
                            className={classes.inputText}
                            id="sus"
                            name="sus"
                            label="Numero do SUS"
                            required
                            onChange={onChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            className={classes.inputText}
                            id="dono"
                            name="nome"
                            label="Nome"
                            required
                            onChange={onChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            className={classes.inputText}
                            id="cpf"
                            name="cpf"
                            label="CPF"
                            required
                            onChange={onChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            className={classes.inputText}
                            id="celular"
                            name="telefone"
                            label="Celular"
                            required
                            onChange={onChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            className={classes.inputText}
                            id="email"
                            name="email"
                            label="Email"
                            required
                            onChange={onChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            className={classes.inputText}
                            id="endereco"
                            name="endereco"
                            label="Endereco"
                            required
                            onChange={onChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            className={classes.inputText}
                            id="numero"
                            name="numero"
                            label="Numero"
                            required
                            onChange={onChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            className={classes.inputText}
                            id="bairro"
                            name="bairro"
                            label="Bairro"
                            required
                            onChange={onChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            className={classes.inputText}
                            id="cidade"
                            name="cidade"
                            label="Cidade"
                            required
                            onChange={onChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            className={classes.inputText}
                            id="uf"
                            name="estado"
                            label="UF"
                            required
                            onChange={onChange}
                        />
                    </Grid>
                    
                    <Grid item spacing={2}>
                        <Button type="submit" className={classes.button} size="large" type="submit">Confirmar</Button>
                    </Grid>

                </Grid>
            </Container>
        </Wrapper>
        <ToastContainer/>
        </form>
    );
}
const Wrapper = styled.div`
display:flex;
`;
export default CadastrarPessoas;