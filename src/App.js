import './App.css';
import Item from './MyItem'
import MyFunction from './MyFunction';

const hello = <p>We are also saying hellosss</p>

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {hello}
      <Item name="Gully" />
      <Item name="Rhubarb" />
      <MyFunction
        name="MyFunction"
        price="35"
        make="Sanyo"
      />
      <Item name="Nozzybear" />
    </div>
  );
}
export default App;