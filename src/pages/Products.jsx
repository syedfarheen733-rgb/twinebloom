import bangles from "../assets/bangles.jpeg";
import earrings from "../assets/earrings.jpg.jpeg";
import weddingCoconuts from "../assets/wedding-coconuts.jpg.jpeg";
import weddingCurtains from "../assets/wedding-curtains.jpg.jpeg";
import weddingDecorations from "../assets/wedding-decorations.jpg.jpeg";
import coconutShellDecor from "../assets/coconut-shell-decor.jpg.jpeg";

function Products() {
  const products = [
    {
      name: "Beautiful Bangles",
      description: "Traditional handmade bangles.",
      price: 499,
      image: bangles,
    },
    {
      name: "Handmade Earrings",
      description: "Elegant earrings for every occasion.",
      price: 299,
      image: earrings,
    },
    {
      name: "Wedding Coconuts",
      description: "Beautifully decorated traditional coconuts.",
      price: 599,
      image: weddingCoconuts,
    },
    {
      name: "Wedding Curtains",
      description: "Beautiful decorations for weddings.",
      price: 2499,
      image: weddingCurtains,
    },
    {
      name: "Wedding Decorations",
      description: "Special handmade wedding decorations.",
      price: 1999,
      image: weddingDecorations,
    },
    {
      name: "Coconut Shell Decor",
      description: "Unique handmade coconut shell decorations.",
      price: 799,
      image: coconutShellDecor,
    },
  ];

  return (
    <div className="products-page">
      <h1>Our Products 🌸</h1>

      <p>Explore our beautiful handmade creations.</p>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="card" key={index}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <h3>₹{product.price}</h3>

            <button>View Product</button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;