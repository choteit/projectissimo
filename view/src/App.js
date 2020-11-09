import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import home from './pages/home';

function App() {
  return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={home}/>
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
