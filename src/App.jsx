import { useCallback, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Length, setLength] = useState("10");
  const [numberAllowed, setnumberAllowed] = useState("false");
  const [charAllowed, setcharAllowed] = useState("false");
  const [Password, setPassword] = useState("");
  // password generator
  const PasswordGenerator = useCallback(() => {
    let array = Array.from({ length: parseInt(Length, 10) }, (_, i) => i); // Create an array based on Length

    let Pass = " ";
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*?/\|+_=-[{]}~";

    for (let i = 0; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length);
      Pass += str.charAt(char);

    }
    setPassword(Pass)

  }, [Length, numberAllowed, charAllowed, setPassword])
  useEffect(() => { PasswordGenerator() }, [Length, numberAllowed, charAllowed, PasswordGenerator])



  return (
    <>
      <div className='w-full 
       max-w-md
       mx-auto 
       shadow-md
       rounded-lg px-4 my-8
       text-orange-500
       bg-blue-900'>

        <h1 className='text-white
        text-center my-3'>Password Generator</h1>
        <div
          className="flex 
        shadow rounded-lg 
        overflow-hidden mb-4">
          <input type="text"
            value={Password}
            className="outline-none
            w-full py-1 px-3"
            placeholder="Password" readOnly />

          <button className='outline-none
          bg-yellow-400
            text-white 
            px-3 py-0.5 
            flex-shrink-0'>copy</button>

        </div>

        <div
          className='flex text-sm gap-x-2'>

          <div
            className='flex items-center gap-x-1'>
            <input
              type="range"
              min={10}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(parseInt(e.target.value)) }} />
            <label>Length:{Length}</label>

          </div>

          <div className="flex
           items-center
            gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);

              }}
            />
            <label htmlFor="numberInput">Numbers</label>

          </div>


          <div className="flex
           items-center
            gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);

              }}
            />


            <label htmlFor="charInput">Character</label>

          </div>

        </div>
      </div>







    </>
  );

}

export default App
