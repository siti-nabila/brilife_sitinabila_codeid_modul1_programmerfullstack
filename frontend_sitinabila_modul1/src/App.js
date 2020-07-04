import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import routes from './configs/routes';

class App extends Component {
  

  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route,index) => 
            <Route exact
              key={index}
              path={route.path}
              render={props => <route.component {...props} {...route.props}/>}/>
          )}
        </Switch>
      </Router> 
    )
  };
}

export default App;
