import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { update } from "immhelper";
import { AppStore } from "_";
import { Counter } from "demo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <AppStore
          initialState={{}}
          ctx={{}}
          inject={{
            update: ({ setState }) => changes =>
              setState(state => update(state, changes))
          }}
          debug
        >
          <Counter />
        </AppStore>
      </div>
    );
  }
}

export default App;
