import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { UserProfile } from "./components/pages/UserProfile";
import { HomePage } from "./components/pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <NavBar/>
          <HomePage/>
        </Route>
        <Route exact path="/profile">
          <NavBar/>
          <UserProfile/>
        </Route>
      </Router>
    </div>
  );
}


export default App;
