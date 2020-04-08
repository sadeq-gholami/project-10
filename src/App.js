import React, { Component } from 'react';
import{BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Displays from './components/displays';
import NavigationBar from './components/NavigationBar';
import Jumbo from './presentation/jumbo';
class App extends Component {
  state = {  }
  render() { 
      return ( 
        <Router>
          <NavigationBar/>
          <Jumbo/>
          <Route exact path = '/' component={Displays}/>
          <Route path = '/about' component={About}/>
          <Route path = '/message' component={Home}/>
        </Router>
    );
  }
}
 
export default App;


