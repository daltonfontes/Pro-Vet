import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import { Btnlogin } from '../../components/Button';
import { BoxStyled } from "../../components/Form";

function Home() {
  const useStyles = makeStyles((theme) => ({
    form: {
      marginBottom: theme.spacing(2),
    },

    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    font: {
      fontFamily: "'Patua One', cursive",
      marginBottom: theme.spacing(5),
    }
  }));

  const classes = useStyles();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <BoxStyled>
          <Typography className={classes.font} component="h1" variant="h4" align="center">
            Login
          </Typography>
          <TextField className={classes.form}
            onChange={e => setUserName(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
            variant="outlined"
            type="password"
            placeholder="Digite uma senha"
            aria-required="true"
            label="Senha"
            required
            fullWidth
            autoFocus />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar senha"
          />
          <Btnlogin type="submit" as="a" href="/dashboard">Entrar</Btnlogin>
        </BoxStyled>
        /</div>
    </Container>
  );
}


export default Home;