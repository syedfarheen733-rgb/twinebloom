function Navbar() {
  return (
    <header className="navbar">
      <h1>Twine Bloom</h1>

      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
        <a href="/register">Sign Up</a>
      </nav>

      <button>🛒 Cart</button>
    </header>
  );
}

export default Navbar;