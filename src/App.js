import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Quotes from "./Quotes";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      working: true
    };
  }

  boutonClick = () => {
    this.setState({ working: !this.state.working });
  };

  render() {
    const travaille = this.state.working ? "Homer works" : "Homer eats";

    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className={this.state.working ? "App-logo" : "donut" }alt="logo" />
        <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.boutonClick} className={travaille}>{travaille}</button>

        <Quote />
        <Quotes/>
      </div>
    );
  }
}

export default App;