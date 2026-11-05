import welcomeImg from './images/welcome.jpg'
//import './App.css'

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

      <style>{`
        .profile-card {
          width: 350px;
          max-width: 100%;
          padding: 25px;
          border: 2px solid #333;
          border-radius: 15px;
          background-color: #e3f2fd;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .profile-img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
          margin: 10px;
          border: 3px solid #333;
        }

        h2 {
          color: #1565c0;
          margin-bottom: 20px;
        }

        p {
          color: #444;
          font-size: 15px;
        }
      `}</style>    
    </div>
  );
}

export default App;
