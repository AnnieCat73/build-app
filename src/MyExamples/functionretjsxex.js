import React from 'react';

function MyFunction(props) {

    return (
        <div>
            <h3>I am trying to export this module called {props.name}</h3>
            <p>The price is £{props.price}</p>
            <p>The make is {props.make}</p>
        </div>
    );
}

export default MyFunction;

/*OR import React from 'react';

const MyFunction = (props) => (

    <div>
        <h3>I am trying to export this module called {props.name}</h3>
        <p>The price is £{props.price}</p>
        <p>The make is {props.make}</p>
    </div>

);
export default MyFunction;*/
