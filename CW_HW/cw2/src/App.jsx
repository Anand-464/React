import './App.css'
import { useState } from 'react'

function App() {
  const name= "Alex"
  const age= 20
  const isStudent= true

  const favoriteHobbies = ["Reading", "Hiking", "Coding"]

  const hobbylist= [];
  for( let i=0; i < favoriteHobbies.length; i++) {
       hobbylist.push(
       <li key ={i}> {favoriteHobbies[i]} </li>
      );
  }

  const headingColor= "lightblue";

  const [message, setMessage] = useState(
    "Click the button to see my enthusiasm!"
  );

  function show(){
    setMessage("Hello from React! I love my hobbies! ");
    document.getElementById("heading").style.backgroundColor= headingColor;
  }


  return (
    <>
      <h1 id="heading" className="main-heading">
      Personal Information and Hobbies
      </h1>
      <div className="card">
        <div className='card-header'>Personal Info</div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Age: {age}</h6>
          <p className="card-text">Is student: {isStudent.toString()} </p>
        </div>
      </div>

      <h3>Favorite Hobbies(for loop)</h3>
      <ul>{hobbylist}</ul>

      <h3>Favorite Hobbies(map)</h3>
      <ul>
        {favoriteHobbies.map((item, index)=> (<li key={index}> {item}</li>))}
      </ul>

      <button className='btn btn-primary' onClick={show}>Show Enthusiasm</button>
      
      <p id='message'>{message}</p>

    </>
  )
}

export default App
