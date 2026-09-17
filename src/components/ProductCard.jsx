function ProductCard({ name, description, icon }) {
  return (
    <div className="card">

      <div className="image">
        {icon}
      </div>

      <h3>{name}</h3>

      <p>{description}</p>

      <button>
        View Products
      </button>

    </div>
  );
}

export default ProductCard;