import "./Products.css";

const products = [
  {
    id: 1,
    name: "Handmade Bangles",
    price: 399,
    image: "/images/bangles.jpg",
  },
  {
    id: 2,
    name: "Kundan Earrings",
    price: 599,
    image: "/images/earrings.jpg",
  },
  {
    id: 3,
    name: "Wedding Coconut",
    price: 499,
    image: "/images/wedding-coconut.jpg",
  },
  {
    id: 4,
    name: "Decorated Coconut",
    price: 799,
    image: "/images/decorated-coconut.jpg",
  },
  {
    id: 5,
    name: "Wedding Curtain",
    price: 1499,
    image: "/images/wedding-curtain.jpg",
  },
  {
    id: 6,
    name: "Coconut Shell Decoration",
    price: 699,
    image: "/images/coconut-shell.jpg",
  },
  {
    id: 7,
    name: "Wedding Decoration Set",
    price: 1299,
    image: "/images/decoration-set.jpg",
  },
  {
    id: 8,
    name: "Bridal Accessories",
    price: 899,
    image: "/images/bridal-accessories.jpg",
  },
];

function Products() {
  const addToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="products-page">
      <h1>Our Handmade Products</h1>
      <p className="products-subtitle">
        Beautiful handmade creations for your special occasions 🌸
      </p>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="product-info">
              <h2>{product.name}</h2>

              <p className="price">₹{product.price}</p>

              <p className="handmade">✨ Handmade with Love</p>

              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;