import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";

class App extends Component {
    render() {
      return (
        <div className="App">
            {/*<Greet name={"Ram"}>*/}
            {/*    <p>This is children props for Ram.</p>*/}
            {/*</Greet>*/}
            {/*<Greet name={"Mohan"}></Greet>*/}
            {/*<Greet name={"Geet"}></Greet>*/}
            {/*<Message></Message>*/}
            {/*<Welcome></Welcome>*/}
            <Counter></Counter>
        </div>
      )
    }
}

export default App;
