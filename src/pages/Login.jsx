import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      // Login successful → Home page
      navigate("/");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.text}>
          Don't have an account?{" "}
          <span
            style={styles.signup}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  loginBox: {
    width: "350px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    backgroundColor: "#222",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },

  text: {
    marginTop: "20px",
  },

  signup: {
    color: "blue",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Login;