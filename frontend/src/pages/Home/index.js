import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, FormControlLabel, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import { Btnlogin } from "../../components/Button";
import { BoxStyled } from "../../components/Form";
import { CompareArrowsOutlined } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const initialState = {
    email: "",
    password: "",
  };

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

  const onSubmit = async (ev)=>{
    ev.preventDefault();
    const response = await fetch('http://localhost:5001/register/authenticate', {
      method: 'POST',
      body: JSON.stringify({ values }),
      headers: new Headers({'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
    })
    if(response.status === 200){
      window.location.replace('http://localhost:3000/dashboard')
    }
    
  }

  
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
            <Btnlogin type="submit">Entrar</Btnlogin>
            <ToastContainer />
          </BoxStyled>
          /
        </div>
      </Container>
    </form>
  );
}

export default Home;
