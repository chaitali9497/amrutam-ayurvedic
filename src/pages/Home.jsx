import "../styles/Home.css";
import { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import AppBanner from "../AppBanner/AppBanner";
import Footer from "../components/footer";
import SearchBar from "../components/Searchbar";
import { filterOptions } from "../utils/filterData";
import Filters from "../components/Filter";
import next from "../assets/product/next.png";
import {products }  from "../utils/Products.js";




function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  useEffect(() => {
  const nextArrow = document.querySelector(".next-arrow");
  const grid = document.querySelector(".product-grid");

  if (nextArrow && grid) {
    nextArrow.addEventListener("click", () => {
      grid.scrollBy({ left: 260, behavior: "smooth" });
    });
  }
}, []);
  return (
    <div className="home">

     
      <div className="store-search-wrapper">
        <SearchBar />
        <Filters 
        filters={filterOptions} 
        active={activeFilter} 
        onSelect={setActiveFilter} 
      />
      </div>

    
<div className="product-section">


  <div className="product-wrapper">
    <h3 className="section-title">Summer Collection</h3>
    <div className="product-grid">
      {products.map((item) => (
         <Link 
      key={item.id} 
      to={`/product/${item.id}`} 
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ProductCard product={item} />
    </Link>
      ))}
    </div>
    <img src={next} className="next-arrow" alt="next" />
  </div>

</div>



<div className="product-section">
  <div className="product-wrapper">
     <h3 className="section-title">Summer Collection</h3>
    <div className="product-grid">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
    <img src={next} className="next-arrow" alt="next" />
  </div>

</div>


      <AppBanner />
      <Footer />
    </div>
  );
}
export default Home;
