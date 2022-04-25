import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createBrowserHistory } from 'history';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <AuthProvider>
         <Router >
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          
          </Switch>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
