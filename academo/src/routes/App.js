import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// componentes 
import Login from '../pages/Login/Login';
import Video from '../pages/Video/Video';

function App() {

  return (
  <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Switch>
        <Route exact path="/video">
          <Video />
        </Route>
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Switch>
  </Router>
  );
}

export default App;
