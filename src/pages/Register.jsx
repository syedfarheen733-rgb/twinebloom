import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration successful! Please login.");

    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>Twine Bloom</h1>

        <p className="login-title">Create Your Account 🌸</p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />

          <button type="submit">
            Sign Up
          </button>
        </form>

        <p className="signup-text">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>
    </div>
  );
}

export default Register;