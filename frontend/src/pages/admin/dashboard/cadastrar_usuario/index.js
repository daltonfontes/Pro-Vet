import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Button, Container, Divider, makeStyles, TextField, Typography, Grid } from '@material-ui/core/';
import Side from '../../Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { createUser } from '../../../../redux-flow/actions';

function CadastrarUsuario({ createUser, stateReducer ,stateAll}) {
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
    const { success, loading } = stateReducer;
    const [values, setValues] = useState();
    const history = useHistory();


    const onChange = (ev) => {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = async (ev) => {
        ev.preventDefault();
        createUser(values)
    };

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                history.push('/dashboard')
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [success]);
console.log('stateAll',stateAll)
    return (
        <form onSubmit={onSubmit}>
            <Wrapper>
                <Side />
                <Container >
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
                            <TextField required id="Funcao" onChange={onChange} name="funcao" label="Função" fullWidth />
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
                            <Button className={classes.button} size="large" type="submit">{loading ? ('loading') : ('Confirmar')}</Button>
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
    stateReducer: state.user,
    stateAll: state
})

const mapDispatch = dispatch => bindActionCreators({
    createUser
}, dispatch)


export default connect(mapStateToProps, mapDispatch)(CadastrarUsuario);