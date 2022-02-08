import React from "react";

class ImageCharacter extends React.Component {

    render() {
        return (
            <img src={this.props.image} alt={this.Character} />

        );

    }

}
export default ImageCharacter;


