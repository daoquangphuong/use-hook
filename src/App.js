import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppStore } from "_";
import { Counter } from "demo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <AppStore>
          <Counter />
        </AppStore>
      </div>
    );
  }
}

export default App;
