import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/admin/dashboard';
import CadastrarUsuario from './pages/admin/dashboard/cadastrar_usuario';
import Internacao from "./pages/admin/dashboard/internacao";
import CadastrarAnimais from "./pages/admin/dashboard/cadastrar_animais";
import CadastroAnimal from './pages/admin/dashboard/cadastrar_animais/cadastroAnimal'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/cadastrar_usuario" exact component={CadastrarUsuario} />
        <Route path="/dashboard/internacao" exact component={Internacao} />
        <Route path="/dashboard/cadastrar_animais" exact component={CadastrarAnimais} />
        <Route path="/dashboard/create_animal" exact component={CadastroAnimal} />
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;