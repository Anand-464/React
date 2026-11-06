import welcomeImg from './images/welcome.jpg'
import './App.css'

function App() {

  const name = "John Doe";
  const description = "I am a web developer who loves learning new technologies and creating beautiful websites.";

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">

      <div className="profile-card text-center">
        <h2>My Profile Card</h2>

        <h5>Internal Image</h5>
        <img src={welcomeImg} alt="Profile" className="profile-img"/>

        <h3>{name}</h3>
        <p>{description}</p>

        <h5>External Image</h5>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXoPf4UiFD9wRKIcFop0LEOVi0gm_3ozBls20gQs9Yg&s=10" alt="External Profile" className="profile-img"/>

      </div>

    </div>
  );
}

export default App;
