import React from 'react';

import { Btncreate, Btnlogin } from '../../components/Button';
import { Main } from '../../components/Main';
import { FormSignIn, FormSignUp } from "../../components/Form";
import Title, { SubTitle } from '../../components/Title';
import { Logo } from '../../components/Logo';
import { InputEmail, InputPass } from '../../components/Inputs';


function Home() {
  return (
    <Main>
      <FormSignIn>
        <Title color="var(--cyan-500)">Entre no ProVet</Title>
        <InputEmail
        placeholder="Digite um email" 
        aria-required="true"
        required 
        autoFocus
        />

        <InputPass placeholder="Digite uma senha" 
        aria-required="true" 
        required />

        <Btnlogin type="button" as="a" href="/">Entrar</Btnlogin>
      </FormSignIn>
      <FormSignUp>
        <Logo></Logo>
        <Title color="var(--white)">ProVet</Title>
        <SubTitle>Primeira vez com a gente? Crie uma conta gratuita</SubTitle>
        <Btncreate type="button" as="a" href="/cadastro">Criar Conta</Btncreate>
      </FormSignUp>
    </Main>  
  );
}


export default Home;