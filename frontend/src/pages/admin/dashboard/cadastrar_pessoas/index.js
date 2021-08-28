import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { Button, Container, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core/';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { ToastContainer, toast } from 'react-toastify';
import { creatPessoa } from '../../../../redux-flow/actions'
import Side from '../../Sidebar'


const CadastrarPessoas = ({creatPessoa, stateReducer})=> {

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
    const history = useHistory();
    const { success, loading } = stateReducer;

    const onChange = (ev) => {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });

        
    };

    
    
    const onSubmit = async (ev) => {
        
        ev.preventDefault();
        creatPessoa(values)
    };

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                history.push('/dashboard')
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    const classes = useStyles();

    return (
        <form onSubmit={onSubmit}>
            <Wrapper>
                <Side />
                <Container >
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
                            <Button className={classes.button} size="large" onSubmit={onSubmit} type="submit" >{loading ? ('loading') : ('Confirmar')}</Button>
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
    stateReducer: state.pessoa
});

const mapDispatch = dispatch => bindActionCreators({
    creatPessoa
}, dispatch);

export default connect(mapStateToProps, mapDispatch)(CadastrarPessoas);