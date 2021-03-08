import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  NavLink
} from "react-router-dom";
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Users from './components/Users';

function App () {
  return (
    <Router>
    <div className= 'container'>
      <div className= "btn-group mt-5">
      <NavLink to="/" className="btn btn-dark" activeClassName="active">
          Inicio
        </NavLink>
        <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">
          Nosotros
        </NavLink>
        <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
          Contacto
        </NavLink>
      </div>
      <hr/>
      <Switch>
        
        <Route path='/nosotros/:id'>
          <Users />
          </Route >
          
        <Route path="/" exact>
          <Inicio/>
        </Route>
        <Route path="/nosotros" exact>
          <Nosotros/>
        </Route>
        <Route path="/contacto" exact>
          <Contacto/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
