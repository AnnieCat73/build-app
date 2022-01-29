import React from 'react';

class Item extends React.Component {

    clickMe() {
        console.log("I clicked", this.props.name);
    }
    clickMeAgain = () => {
        console.log("Click me AGAIN!")
    }
    render() {
        return (
            <div>
                <h1 onClick={() => this.clickMe()}>Hello from {this.props.name}</h1>
                <h2 onClick={this.clickMeAgain}>Hello again ${this.props.price}</h2>
            </div>

        );
    }
}

export default Item;
