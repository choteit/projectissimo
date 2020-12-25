import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './pages/home/home';
import {ProjectsList} from './pages/projectsList/projectsList'

function App() {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/projects" component={ProjectsList}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
