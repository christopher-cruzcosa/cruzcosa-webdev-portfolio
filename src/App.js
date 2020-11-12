import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Wrapper>
        <Route exact path="/cruzcosa-webdev-portfolio">
          <Redirect to="/cruzcosa-webdev-portfolio/about" />
        </Route>
        <Route exact path="/cruzcosa-webdev-portfolio/about">
          <About/>
        </Route>
        <Route exact path="/cruzcosa-webdev-portfolio/portfolio">
          <Portfolio/>
        </Route>
        <Route exact path="/cruzcosa-webdev-portfolio/contact">
          <Contact />
        </Route>
      </Wrapper>
      <Footer/>
    </div>
  </Router>


    
  );
}

export default App;
