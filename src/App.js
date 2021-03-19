import React, { useEffect } from 'react'
import firebase from 'firebase'
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  if (firebase.auth().currentUser === null) {
    return (
      <div className="App">
        <Switch>
          <Route path='/' component={Login} />
        </Switch>
      </div>
    )
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
