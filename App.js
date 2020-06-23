// React
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';

// States
import ContactState from './context/contact/ContactState';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';

// Auth
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';

// Route
import PrivateRoute from './components/routing/PrivateRouting';

// CSS
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const  App = () => {
  return (
    <AuthState>
    <ContactState> 
    <AlertState>
    <Router>  
    <Fragment>
    
      <Navbar />

      <div className="container">
        <Alerts />
        <Switch>

          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

        </Switch>
      </div>

    </Fragment>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
  );
}

export default App;
