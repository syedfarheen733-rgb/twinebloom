function Register() {
  return (
    <div className="login-page">
      <div className="login-box">

        <h1>Twine Bloom</h1>

        <p className="login-title">Create Your Account 🌸</p>

        <form>
          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
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