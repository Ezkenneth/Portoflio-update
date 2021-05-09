import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./app.css";


class App extends Component {
  
  render() {
  return (
    <Router>
    <div>
    <NavTabs />
     <Route exact path="/" component={Home} />
     <Route exact path="/home" component={Home} />
     <Route exact path="/projects" component={Projects} />
     <Route exact path="/contact" component={Contact} />
    </div>
    </Router>
  );
}

}

export default App;

