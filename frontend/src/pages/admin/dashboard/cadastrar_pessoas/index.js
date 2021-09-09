import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { Button, Container, Divider, Grid, makeStyles, TextField, Typography, Box } from '@material-ui/core/';
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { ToastContainer, toast } from 'react-toastify';
import { creatPessoa } from '../../../../redux-flow/actions';
import Side from '../../Sidebar';
import PessoaModal from '../../modal/pessoaModal';
import CardAnimal from '../cadastrar_animais/cardAnimal';

const CadastrarPessoas = ({ creatPessoa, stateReducer, stateAll }) => {

    const useStyles = makeStyles((theme) => ({
        font: {
            fontFamily: 'Patua One',
            fontSize: '12px',
        },
        buttonCreated: {
            position: 'absolute',
            background: 'var(--yellow)',
            borderRadius: '30px',
            border: '2px solid var(--black)',
            fontFamily: 'Patua One',
            marginTop: '15px',

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
            marginTop: '140px'
        },

        secondTitle: {
            fontSize: '30px',
            fontFamily: 'Patua One',
            color: 'var(--blue-500)',
            position: 'absolute',
            marginTop: '50px'
        },

        span: {
            fontSize: '20px',
            marginTop: '10px'
        },

        hr: {
            marginTop: '190px',
            border: '1px solid var(--black-50)'
        },

        secondHr: {
            marginTop: '100px',
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

    const [uf, setUf] = useState()
    const [cidade, setCidade] = useState()
    const [bairro, setBairro] = useState()
    const [numero, setNumero] = useState()
    const [endereco, setEndereco] = useState()

    const [labelUf, setLabelUf] = useState('UF')
    const [labelCidade, setLabelCidade] = useState('Cidade')
    const [labelBairro, setLabelBairro] = useState('Bairro')
    const [LabelEndereco, setLabelEndereco] = useState('Endereço')


    const history = useHistory();
    const { success, loading } = stateReducer;

    const onChange = (ev) => {

        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    };

    console.log('values', values)
    const onSubmit = async (ev) => {
        ev.preventDefault();
        creatPessoa(values)
    };

    const onClick = () => {
        history.push("/dashboard/create_animal")
    }

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                history.push('/dashboard')
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    const classes = useStyles();

    const fetchCep = async (data) => {
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }
        const cep = await fetch(`https://viacep.com.br/ws/${data}/json/`, options).then(resp => {
            return resp.json()
        })
        return cep
    };

    const cepConsumer = values ? values.cep : null

    const pushCadastroAnimal = () => {
        history.push('/dashboard/create_animal')
    }

    useEffect(async () => {
        if (cepConsumer != null && cepConsumer.length >= 8) {
            const cep = await fetchCep(cepConsumer)
            console.log('cep', cep)
            if (cep) {
                setUf(cep.uf)
                setCidade(cep.localidade)
                setBairro(cep.bairro)
                setNumero()
                setEndereco(cep.logradouro)


                setLabelUf('')
                setLabelCidade('')
                setLabelBairro('')
                setLabelEndereco('')
            }
        }
    }, [cepConsumer])

    return (
        <form onSubmit={onSubmit}>
            <Wrapper>
                <Side />
                <PessoaModal />
                <Container >
                    <Typography className={classes.title}> Cadastro do Dono</Typography>
                    <Divider className={classes.hr} light="true" />
                    <Grid container spacing={2}>

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
                            <InputMask
                                mask="999.999.999-99"
                                maskChar=" "
                                onChange={onChange}
                                id="cpf"
                                name="cpf"
                            >
                                {() => <TextField className={classes.inputText} label="CPF" required name="cpf" />}
                            </InputMask>

                            {/* <TextField
                                className={classes.inputText}
                                id="cpf"
                                name="cpf"
                                label="CPF"
                                masked='000.000.000-00'
                                required
                                onChange={onChange}
                            /> */}
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                className={classes.inputText}
                                id="sus"
                                name="sus"
                                label="Numero do SUS"
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <InputMask
                                mask="(99) - 9 9999-9999"
                                maskChar=" "
                                onChange={onChange}
                                id="celular"
                                name="telefone"
                            >
                                {() => <TextField className={classes.inputText} label="Celular" required name="telefone" />}
                            </InputMask>

                            {/* <TextField
                                className={classes.inputText}
                                id="celular"
                                name="telefone"
                                label="Celular"
                                onChange={onChange}
                            /> */}
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                className={classes.inputText}
                                id="email"
                                name="email"
                                label="Email"

                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                className={classes.inputText}
                                id="cep"
                                name="cep"
                                label="CEP"
                                required
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                className={classes.inputText}
                                id="endereco"
                                name="endereco"
                                label={LabelEndereco}
                                value={endereco}
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
                                value={numero}
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                className={classes.inputText}
                                id="bairro"
                                name="bairro"
                                label={labelBairro}
                                value={bairro}
                                required
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                className={classes.inputText}
                                id="cidade"
                                name="cidade"
                                label={labelCidade}
                                value={cidade}
                                required
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                className={classes.inputText}
                                id="uf"
                                name="estado"
                                label={labelUf}
                                value={uf}
                                required
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={3}></Grid>

                        <Grid item spacing={2}>
                            <Button className={classes.button} size="large" onSubmit={onSubmit} type="submit" >{loading ? ('loading') : ('Confirmar')}</Button>
                        </Grid>

                    </Grid>
                    <Box display="flex" flexDirection="row-reverse" marginBottom="-1.902rem">
                        <Button className={classes.buttonCreated} size="large"  onClick={pushCadastroAnimal}> + Adicionar Animal </Button>
                    </Box>

                    <Typography className={classes.secondTitle}> Animais</Typography>
                    <Divider className={classes.secondHr} light="true" />
                    <div className="Container_Card_Animais">

                    </div>
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
    stateReducer: state.pessoa,
    stateAll: state
});

const mapDispatch = dispatch => bindActionCreators({
    creatPessoa
}, dispatch);

export default connect(mapStateToProps, mapDispatch)(CadastrarPessoas);