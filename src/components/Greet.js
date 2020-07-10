import React from 'react'

// function Greet() {
//     return (
//         <h1>Hello, Geek!</h1>
//     );
// }

// Try it using arrow functions.
const Greet = () =>  {
    // return (
    //     <div>
    //         <h1>Hello, Geek!</h1>
    //     </div>
    // )

    return (
        React.createElement (
            'div',
            null,
            React.createElement (
                'h1',
                null,
                'Hello, World!'
            )
        )
    )
}



export default Greet