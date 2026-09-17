function Login() {
  return (
    <div className="login-page">
      <div className="login-box">

        <h1>Twine Bloom</h1>

        <p className="login-title">Welcome Back 🌸</p>

        <form>
          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?
          <a href="/register"> Sign Up</a>
        </p>

      </div>
    </div>
  );
}

export default Login;