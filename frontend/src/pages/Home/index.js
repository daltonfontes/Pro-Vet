import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Btnlogin } from "../../components/Button";
import { BoxStyled } from "../../components/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { userAuthenticate } from '../../redux-flow/actions';

function Home({userAuthenticate, stateReducer}) {
  const initialState = {
    email: "",
    password: "",
  };

  const { success, loading} = stateReducer;

  const history = useHistory();
  const [values, setValues] = useState(initialState);


  const useStyles = makeStyles((theme) => ({
    form: {
      marginBottom: theme.spacing(2),
    },

    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    font: {
      fontFamily: "'Patua One', cursive",
      marginBottom: theme.spacing(5),
    },
  }));
 
  const onSubmit = async (ev) => {
    ev.preventDefault();
    await userAuthenticate(values)
    if(success){
      history.push("/dashboard")
    } else{
      history.push("/")
    }
  };

  const classes = useStyles();

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <BoxStyled>
            <Typography
              className={classes.font}
              component="h1"
              variant="h4"
              align="center"
            >
              Login
            </Typography>
            <TextField
              className={classes.form}
              name="email"
              onChange={onChange}
              variant="outlined"
              type="text"
              placeholder="Digite um usuario valido"
              aria-required="true"
              label="Nome do usuario"
              autoComplete="text"
              required
              fullWidth
              autoFocus
            />
            <TextField
              onChange={onChange}
              variant="outlined"
              type="password"
              name="password"
              placeholder="Digite uma senha"
              aria-required="true"
              label="Senha"
              required
              fullWidth
              autoFocus
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar senha"
            />
            <Btnlogin type="submit">{loading ? ('loading'): ('Entrar')}</Btnlogin>
  
          </BoxStyled>
          /
        </div>
      </Container>
      <ToastContainer/>
    </form>
  );
}

const mapStateToProps = state => ({
  stateReducer: state.user
})

const mapDispatch = dispatch => bindActionCreators({
  userAuthenticate
}, dispatch)

export default connect(mapStateToProps, mapDispatch)(Home);
