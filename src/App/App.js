import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import ValidRoutes from "./ValidRoutes";
import { Switch, Route } from 'react-router';
import { Page404 } from '../pages/NotFound/Page404';
import AdminRoutes from './AdminRoutes'
// import test from './test';

class App extends Component {
  render() {
    return (
      <div className="App">
             <Router>
                <div>
                    <Switch>
                      <Route exact path="(/)" component={ValidRoutes}/>
                      <Route exact path="(/admin|/login)" component={AdminRoutes}/>
                      {/* <Route exact path="/test" component={test}/> */}
                      <Route exact path="/*" component={Page404}/>
                    </Switch>
                </div>
            </Router>
      </div>
    );
  }
}

export default App;
