import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";


function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <section id="products" className="products">
        <p className="tagline">OUR COLLECTION</p>

        <h2>Handmade Creations</h2>

        <div className="product-grid">

          <ProductCard
            name="Beautiful Bangles"
            description="Traditional handmade bangles"
            icon="💍"
          />

          <ProductCard
            name="Handmade Earrings"
            description="Elegant earrings for every occasion"
            icon="✨"
          />

          <ProductCard
            name="Wedding Curtains"
            description="Beautiful decorations for weddings"
            icon="🎀"
          />

          <ProductCard
            name="Wedding Coconuts"
            description="Creative traditional wedding items"
            icon="🥥"
          />

          <ProductCard
            name="Coconut Shell Decor"
            description="Unique handmade decorations"
            icon="🐚"
          />

          <ProductCard
            name="Wedding Decorations"
            description="Special handmade wedding decor"
            icon="🌸"
          />

        </div>
      </section>


      <section id="about" className="about">
        <h2>Made by hand, made with love.</h2>

        <p>
          Twine Bloom Creations brings together beautiful handmade
          crafts and traditional wedding decorations.
        </p>
      </section>


      <section id="contact" className="contact">
        <p className="tagline">GET IN TOUCH</p>

        <h2>Let's create something beautiful.</h2>

        <form>
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </section>


      <Footer />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
  path="/Products"
  element={<Products/>}
/>

        {/* Home - Login ayithe matrame */}
        <Route path="/" element={<Home />} />

      </Routes>

    </BrowserRouter>
  );
}


export default App;