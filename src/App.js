import React from "react";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Smoothscrollbar from "./components/Smoothscrollbar";
// import Scrolltotop from "./components/Scrolltotop";
export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        {/* <Scrolltotop /> */}
        <Smoothscrollbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </Smoothscrollbar>
      </Router>
    </>
  );
}
