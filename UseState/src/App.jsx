import './App.css'
import { useState } from 'react'


function App() {

  const [count, setCount] = useState(10)

  // interview question if i want to increment the value of count by 3 in a single click
  // const Increment = () => {
  //  setCount(prevCount => prevCount + 1);
  //  setCount(prevCount => prevCount + 1);
  //  setCount(prevCount => prevCount + 1);
  // }            

  const Increment = () => {
    if (count >= 25) {
      alert("Counter value can't be greater than 25");
      return
    }
    setCount(count + 1);
  }

  const Decrement = () => {
    if (count <= 0) {
      alert("Counter value can't be negative");
      return;
    }
    setCount(count - 1);
  }

  return (
    // first react app
    <div>
      <h1 class="logo">One code with <span class="cursive">Sadique</span></h1>
      <br />
      <h2>Counter value : {count}</h2>

      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement
      </button>

      <br />

      <footer>
        <p>Current value is : {count}</p>
      </footer>
    </div>
  )
}

export default App
