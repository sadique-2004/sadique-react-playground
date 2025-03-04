import { useState } from "react"

function App() {

  const [color, setColor] = useState('olive');

  const white = () => setColor('white');
  const red = () => setColor('red');
  const green = () => setColor('green');
  const blue = () => setColor('blue');
  const yellow = () => setColor('yellow');
  const gray = () => setColor('gray');



  return (
    <div className='h-screen flex flex-wrap justify-center items-center'
      style={{ backgroundColor: color }}>

      <div className="flex gap-2 bg-white px-4 py-2 rounded-3xl shadow-md ">
      <button onClick={blue} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition">Blue</button>
        <button onClick={white} className="bg-white text-black border border-gray-400 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition">White</button>
        <button onClick={green} className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition">Green</button>
        <button onClick={red} className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition">Red</button>
        <button onClick={yellow} className="bg-yellow-500 text-black px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition">Yellow</button>
        <button onClick={gray} className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-900 transition">Gray</button>
      </div>


    </div>
  )
}

export default App
