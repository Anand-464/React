import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [user, setUser]= useState("Guest");

  useEffect(()=> {
    if (user=== "Alice"){
      console.log("User changed to alice")
    }
    
  },[user])

  return (
    <>
      <h2>Welcome, {user}! </h2>
      <button on onClick={()=> setUser("Alice")}>Login as Alice</button>
    </>
  )
}

export default App
