import './App.css';

const Add = props => <h1>{props.a * props.b}</h1>; //Compon start with capitals

function App() {
    return <Add a={2} b={2} /> //4
}

export default App;
