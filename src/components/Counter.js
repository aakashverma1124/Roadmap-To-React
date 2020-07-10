import React, {Component} from "react";

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            startValue : 0
        }
    }
    render() {
        return (
            <div>
                <div>
                    <button>{this.state.startValue}</button>
                </div>
                <button onClick={() => this.incrementCount()}>Increment</button>
            </div>
        )
    }

    incrementCount() {
        this.setState({
            startValue: this.state.startValue + 1
        })
        console.log(this.state.startValue)
    }
}

export default Counter