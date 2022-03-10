import React from "react";
import './App.css';

class ImageCharacter extends React.Component {
    
    render() {
        return (
            <div >
                <img className="image" src={this.props.image} alt={this.Character} />
            </div>


        );

    }

}
export default ImageCharacter;


