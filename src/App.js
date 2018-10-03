import React, { Component } from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import CustomNavbar from './common/Navbar.jsx';
import Body from './component/body.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <CustomNavbar />
          <Route exact path="/" component = {Body} />
        </div>
      </Router>
    )
  }
}

export default App;
