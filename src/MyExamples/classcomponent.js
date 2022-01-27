import react from 'react';
import reactDom from 'react-dom';

class Add extends React.Component {
  render() {
    return <h1>{this.props.a * this.props.b}</h1>
  }
}



export default Add;