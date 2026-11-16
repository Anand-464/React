import { useState } from "react";
import Navbar from "./Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://worksheet-auth.mashupstack.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

    const data = await response.json();

    if (response.ok) {
        alert("Successfully Logged In");

        console.log("Token:", data.token);
    } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <label htmlFor="email">Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password">Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" className="btn btn-success">Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;