import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { elastic as Menu } from 'react-burger-menu'

import HomePage from './Pages/home';
import HTMLPage from './Pages/HTML';
import CSSPage from './Pages/CSS';
import ToolingPage from './Pages/Tooling'

import './App.css';


function App() {
  return (
    <Router>
      <div className="wrapper" id="outer-wrapper">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-wrapper"} width={'250px'}>
          <NavLink exact className="menu-item" activeClassName='active' to="/">Home</NavLink >
          <NavLink exact className="menu-item" activeClassName='active' to="/HTML">HTML</NavLink >
          <NavLink exact className="menu-item" activeClassName='active' to="/CSS">CSS</NavLink >
          <NavLink exact className="menu-item" activeClassName='active' to="/Tooling">Tooling</NavLink >
        </Menu>
        <main id="page-wrap">
          <div className="container pt-5">
            <div className="row titleRow">
              <div className="col text-center">
                <h1>HTML/CSS Reference Guide</h1>
              </div>
            </div>
            <div className="row text-center">
              <Switch>
                <Route path="/HTML">
                  <HTMLPage />
                </Route>
                <Route path="/CSS">
                  <CSSPage />
                </Route>
                <Route path="/Tooling">
                  <ToolingPage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
