import React from 'react';
import './App.css';
import Home from './pages/Home';
import {  BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return(<Router>
      <Route path="/" component={Home} render={props => <Home {...props} />}/>
      <Route path="/home" component={Home} render={props => <Home {...props} />}/>
  </Router>
);
}

export default App;
