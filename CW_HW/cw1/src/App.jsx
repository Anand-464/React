import './App.css'
import welcomeImg from './images/welcome.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const userName = "Aby"

  console.log("React app started")

  return (
    <div className="container mt-5">

      <div className="card p-4 shadow text-center mx-auto" style={{ width: "500px" }}>
        
        <h1 style={{color: "blue", fontSize: "28px", marginBottom: "20px"}}>
          Welcome to React Learning, {userName}
        </h1>

        <div>
          <img src={welcomeImg} className="img-fluid rounded mb-3" width="200" alt="Welcome"/>
        </div>

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXoPf4UiFD9wRKIcFop0LEOVi0gm_3ozBls20gQs9Yg&s=10" className="img-fluid rounded mb-3" alt="React learning"/>
        </div>

        <p className="text-muted">
          This is your first card with images and styles!
        </p>
      </div>

    </div>
  )
}

export default App