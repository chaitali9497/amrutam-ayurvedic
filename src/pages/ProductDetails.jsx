import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/Products.js";
import "../styles/ProductDetails.css";
import SearchBar from "../components/Searchbar";
import { FaStar } from "react-icons/fa";
import Filters from "../components/Filter";
import { filterOptions } from "../utils/filterData";
import { useState } from "react";
import ProductHighlights from "../components/ProductHighlights";
import { productHighlights } from "../utils/Highlight";
import HerbInfoCards from "../components/HerbInfoCards.jsx";


 function ProductDetails() {
  const [activeFilter, setActiveFilter] = useState("all");
  

  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <h2>Product not found</h2>;

   const match = productHighlights.find((m) => m.id === Number(id));

  return (
  <div className="product-details-page">
      <div className="store-search-wrapper">
        <SearchBar />
         <Filters 
        filters={filterOptions} 
        active={activeFilter} 
        onSelect={setActiveFilter} 
      />
      </div>
  <div className="details-container">
      
      <div className="details-left">
        <img src={product.image} alt={product.title} className="details-main-img" />

        <div className="thumb-row">
          <img src={product.image} className="thumb" alt="" />
          <div className="thumb-wrapper">
  <img src={product.image} className="thumb2 thumb-blur" alt="" />
  </div>
  <div className="thumb-wrapper">
    <img src={product.image} className="thumb2 thumb-blur" alt="" />
  </div>
        </div>
      </div>

     
      <div className="details-right">

        <h2 className="details-title">{product.title}</h2>

        <div className="details-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
          <span className="reviews">(204 reviews)</span>
        </div>

        <div className="details-price">
          ₹{product.price}
        </div>
        <div className="variant-row">
  <button className="variant-btn active">200 ml</button>
  <button className="variant-btn">100 ml</button>
  <button className="variant-btn">Pack of 3</button>
</div>

        <div className="buy-row">
 <div className="qty-cart-row">
  <div className="qty-box">
    <button>-</button>
    <span>1</span>
    <button>+</button>
  </div>

  <button className="cart-btn">Add to cart</button>
</div>
</div>


 

        <p className="details-desc">
          {product.description}
        </p>
  <ProductHighlights data={match?.highlights || []} />
  <HerbInfoCards />

  <div className="details-footnote">
    <h3> How to Use</h3>
    <div className="footnote-desc">
    <p>
      Mix one or tow tablespoons of Herbal Child Care Malt with milk or 100-200ml warm water and then consume twice a day or consult our Ayurvedic Expert 
      to find the right Ayurvedic recipe for you.
      </p>
      </div>
    </div>
     <div className="details-footnote2">
    <h3> General Instruction</h3>
    <div className="footnote-desc2">
    <p>
     Store in a cool and dry palce away from direct sunlight.
      Not advisable for diabetic patients
      </p>
      </div>
    </div>
    <div className="faq-section">
  <h3>Commonly Asked Questions</h3>

  <div className="faq-item">
    <h3>Who should be using Amrutam Child Care Malt | Herbal Supplement for<br></br> Child Care?</h3>
    <p>
      This product is ideal for growing babies and kids to nurture their health in a
      holistic manner.
    </p>
  </div>
</div>

<div className="faq-item">
  <h3>Why choose Amrutam Child Care Malt | Herbal Supplement for Child Care?</h3>
  <p>
    Amrutam's Child Care Malt helps improve immunity and enhances vitality and vigor in children.
    This 100% natural Ayurvedic jam is extremely effective in fighting chronic diseases.
    Giving your little one Amrutam's Child Care Malt daily will help improve appetite and digestion.
    It is useful in treating anemia, general debility, and maintaining a healthy weight.
    100% Natural and Ayurvedic  
    PETA certified cruelty-free  
    Hand-picked and ethically sourced ingredients  
    AYUSH certified and US FDA approved
  </p>
</div>
   


      </div>
    </div>
    </div>
  );
}
export default ProductDetails;
