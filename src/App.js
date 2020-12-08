import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Registro from './components/auth/Registro';
import Proyectos from './components/proyectos/Proyectos';

function App() {
  return (
    <Router>
      {/* Lo que se ve en todas las paginas */}
      <Switch>
        {/* Lo que va cambiando en la pagina */}
        <Route exact path="/" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/proyectos" component={Proyectos} />
      </Switch>
    </Router>
  );
}

export default App;
