import React from 'react';

class ImageComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <img src={this.props.image} alt={this.props.image} />
            </div>

        );
    }
}

export default ImageComponent;