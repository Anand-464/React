import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("https://worksheet-auth.mashupstack.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_name: name,
            email: email,
            password: password,
          }),
        }
      );

    const data = await response.json();

    if (response.ok) {
        alert("Registration Successful");
        navigate("/login");
    } else {
        alert(data.message || "Registration Failed");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
    <Navbar/>
    
    <div className="container mt-5 text-center ">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>

        <label htmlFor="name">Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br/><br />

        <label htmlFor="email">Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br />

        <label htmlFor="password">Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br />

        <label htmlFor="confirmPassword">Confirm password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required /><br/><br />

        <button type="submit" className="btn btn-success">Register</button>
      </form>
    </div>
    </>
  );
}

export default Register;