import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function Contactus() {
    const navigate= useNavigate();
    function goToHomePage(){
        navigate('/')
    }
  return (
    <div>
        <Navbar/>
        <h1>Contact us</h1>
        <form className="container" style={{ maxWidth: "600px" }}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                <button type="submit" onClick={goToHomePage} className="btn btn-primary mt-3">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Contactus