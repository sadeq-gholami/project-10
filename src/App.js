import React, { Component } from 'react';
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Displays from './components/displays';
import NavigationBar from './components/NavigationBar';
import Jumbo from './presentation/jumbo';
class App extends Component {
  state = {  }
  render() { 
      return ( 
      <React.Fragment> 
        <NavigationBar/>
        <Jumbo/>
        <Router>
          <Switch>
            <Route exact path = '/' component={Home}/>
            <Route path = '/About' component={About}/>
            <Route path = '/Displays' component={Displays}/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
 
export default App;


