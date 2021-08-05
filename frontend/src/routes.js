import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/admin/dashboard';


function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
    </BrowserRouter>

  );
}

export default Routes;