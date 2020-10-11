import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages';
import { SignIn } from './pages/SignIn';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/SignIn" render={() => <SignIn />} />
      </Switch>
    </div>
  );
}

export default App;
