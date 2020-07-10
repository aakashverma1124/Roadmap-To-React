import React from 'react'

// function Greet() {
//     return (
//         <h1>Hello, Geek!</h1>
//     );
// }

// Try it using arrow functions.
const Greet = (props) =>  {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            {/*In case of class component, props can be used using this.props.name*/}
            {props.children}
        </div>
    )

    // return (
    //     React.createElement (
    //         'div',
    //         {id: 'hello', className: 'hello'},
    //         React.createElement (
    //             'h1',
    //             null,
    //             'Hello, World!'
    //         )
    //     )
    // )
}



export default Greet