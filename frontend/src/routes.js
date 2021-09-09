import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/admin/dashboard';
import CadastrarUsuario from './pages/admin/dashboard/cadastrar_usuario';
import Internacao from "./pages/admin/dashboard/internacao";
import CadastrarAnimais from "./pages/admin/dashboard/cadastrar_animais";
import CadastroAnimal from './pages/admin/dashboard/cadastrar_pessoas/cadastroAnimal'
import CadastrarPessoas from './pages/admin/dashboard/cadastrar_pessoas'
import ModalInfo from './pages/admin/modal/pessoaModal';
import PriveteRoute from './components/PrivateRoute';


function Routes() {
  return (
    <BrowserRouter>

      <Switch>

        <Route path='/' exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/cadastrar_usuario" exact component={CadastrarUsuario} />
        <Route path="/dashboard/cadastrar_pessoas" exact component={CadastrarPessoas} />
        <Route path="/dashboard/internacao" exact component={Internacao} />
        <PriveteRoute path="/dashboard/cadastrar_animais" exact  >
          <CadastrarAnimais />
        </PriveteRoute>
        <Route path="/dashboard/create_animal" exact component={CadastroAnimal} />
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;