import './App.css'
import { useState } from 'react';

function App() {
  const food= ['Idli', 'Mandi', 'Biriyani', 'Porotta', 'Dosa'];

  const [message, setMessage]= useState(
    'Select a food that you love!'
  );

  return (
    <>
      <h1>Favorite foods</h1>
      <ul>
        {food.map((food, index)=> (
          <li key={index}>
            {food}{''}
            <button style={{color: "black"}}onClick={()=> setMessage(`I love ${food}`)}>Click</button>
          </li>
        ))}
      </ul>

      <h2>{message}</h2>
    </>
  )
}

export default App
