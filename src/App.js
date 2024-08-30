import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom/cjs/react-router-dom";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Websites from "./pages/Websites";
import GreenLuck from "./pages/GreenLuck";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PageTitle from "./components/PageTitle";
import React, { Component } from "react";
import axios from "axios";

const apiCall = () => {
  axios.get("http://localhost:8080").then((data) => {
    //this console.log will be in our frontend console
    console.log(data);
  });
};

export default class App extends Component {
  render() {
    return (
      <>
        <Router link={Link}>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
                <PageTitle title="Waps Tech Hive - About Us" />
              </Route>
              <Route exact path="/contact-us">
                <ContactUs />
                <PageTitle title="Waps Tech Hive - Contact Us" />
              </Route>
              <Route exact path="/project/apps">
                <Apps />
                <PageTitle title="Waps Tech Hive - Apps Project" />
              </Route>
              <Route exact path="/project/websites">
                <Websites />
                <PageTitle title="Waps Tech Hive - Websites Projects" />
              </Route>
              <Route exact path="/green-luck-app">
                <GreenLuck />
                <PageTitle title=" Green Luck Mobile App - Download" />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
