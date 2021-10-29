import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/register">
          <RegistrationForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
