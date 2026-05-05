import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        const users = response.data;

        const user = users.find(
          (u) =>
            u.name === name &&
            u.email === email &&
            u.password === password
        );

        if (user) {
          setMessage("Login Successful ✅");
        } else {
          setMessage("Invalid Credentials ❌");
        }
      })
      .catch((error) => {
        setMessage("Server Error");
      });
  };

  return (
    <div style={{ width: 300, margin: "50px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>{message}</p>
    </div>
  );
}