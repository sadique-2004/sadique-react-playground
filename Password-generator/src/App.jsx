import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])


  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-center">
      <div className="w-full max-w-md  shadow-lg rounded-xl px-6 py-6 my-10 bg-gray-800 text-white m-auto" >

        <h1 className="text-center text-3xl font-semibold mb-4">Password Generator</h1>

        <div className="flex border border-gray-600 rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-2 bg-gray-900 text-gray-300 outline-none"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 font-medium cursor-pointer">
            Copy
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor='length' className="text-sm">Length: {length}</label>
            <input
              type="range"
              max={100}
              min={6}
              value={length}
              id='length'
              className="cursor-pointer accent-green-500"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor='numInput' className="text-sm">Include Numbers</label>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id='numInput'
              className="cursor-pointer accent-amber-300"
              onChange={() => setNumAllowed((prev) => !prev)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor='charInput' className="text-sm">Include Special Characters</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              className="cursor-pointer accent-amber-300"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
          </div>
          <a href="https://linktr.ee/Md_Sadique2004">
            <footer className='text-center bg-amber-100 hover:bg-amber-200 text-yellow-700 rounded-2xl'>
              One code with <b>Sadique</b>
            </footer>
          </a>
        </div>
      </div>


    </div>
  )
}

export default App
