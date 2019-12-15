import React from 'react';

import { Route, Switch } from "react-router-dom";

import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import PresupuestoPage from './pages/presupuesto/presupuesto.page'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact component={LoginPage} path='/'/>
        <Route exact component={PresupuestoPage} path='/presupuesto'/>
      </Switch> 
    </div>
  );
}

export default App;
