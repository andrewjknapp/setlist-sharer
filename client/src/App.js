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
        <NavBar/>
        <main className="mainView">
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/profile" component={UserProfile}/>
        </main>
      </Router>
    </div>
  );
}


export default App;
