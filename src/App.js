import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Registro from './components/auth/Registro';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoState from './context/proyectos/ProyectoState';
import TareaState from './context/tareas/TareaState';
import AlertaState from './context/alertas/AlertaState';
import AuthState from './context/autenticacion/AuthState';

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
      <Router>
        {/* Lo que se ve en todas las paginas */}
        <Switch>
          {/* Lo que va cambiando en la pagina */}
          <Route exact path="/" component={Login} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
      </Router>
      </AuthState>
      </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
