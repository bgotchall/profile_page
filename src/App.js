import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
 //import Blog from "./components/pages/Blog";
 import Contact from "./components/pages/Contact";
 import Portfolio from "./components/pages/Portfolio";
 //import Skills from "./components/pages/Skills";
 //import NavTabs from './components/NavTabs';

function App() {
  return (
    <>
      <Router>
        <div>
        
          <Route exact path="/" component={Home} />
          <Route exact path="http://www.bgotchall.com" component={Home} />
          <Route exact path="/about" component={About} />
         
          <Route exact path="/portfolio" component={Portfolio} />
          
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </>
  );
}

export default App;
