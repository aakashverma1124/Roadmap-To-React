import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./greet";

class App extends Component {
    render() {
      return (
        <div className="App">
            <Greet></Greet>
        </div>
      )
    }
}

export default App;
