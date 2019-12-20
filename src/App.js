import React from 'react';
import './app.styles.scss'

//react router
import { Route, Switch } from "react-router-dom";

//pages
import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import PresupuestoPage from './pages/presupuesto/presupuesto.page'

//components
import Navbar from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'


function App() {
  return (
    <div className="App container-fluid">
      <Navbar/>
      <Switch>
        <Route exact component={LoginPage} path='/'/>
        <Route exact component={PresupuestoPage} path='/presupuesto'/>
        <Route exact component={HomePage} path='/home'/>
      </Switch> 
      <Footer/>
    </div>
  );
}

export default App;
