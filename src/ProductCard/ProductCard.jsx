import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import "../styles/ProductCard.css";



const ProductCard = ({ product }) => {
  return (

    <div className="product-card">
     
      <img src={product.image} className="product-img" alt={product.title} />

      <h3 className="product-title">{product.title}</h3>

      <p className="product-price">
        ₹ {product.price}.00 • {product.size}
      </p>

      <div className="product-rating">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="star" />
        ))}
        <span className="review-count">({product.reviews})</span>
      </div>

      <button className="add-btn">
        <FaPlus />
      </button>
    </div>
  );
};

export default ProductCard;
