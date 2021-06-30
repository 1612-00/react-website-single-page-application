import React from 'react'
import "./css/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/products" exact component={Products}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/sign-up" exact component={SignUp}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
