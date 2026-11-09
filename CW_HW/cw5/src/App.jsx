import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <ul>
        <li>
          <Link to="student/">Alexa</Link>
        </li>
        <li>
          <Link to="student/Riya">Riya</Link>
        </li>
        <li>
          <Link to="student/Rahul">Rahul</Link>
        </li>
        <li>
          <Link to="student/Anu">Anu</Link>
        </li>
      </ul>
    </>
  )
}

export default App
