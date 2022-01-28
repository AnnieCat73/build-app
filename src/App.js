import './App.css';
import Item from './MyItem'

const hello = <p>We are also saying hellosss</p>

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {hello}
      <Item />
    </div>
  );
}
export default App;