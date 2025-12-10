 import "../styles/SearchBar.css";
 import searchIcon from "../assets/searchIcon.png";
import bagIcon from "../assets/searchbox.png";

function Searchbar() {
  return (
    <>  


<div className="store-section">
  <h2 className="store-title">Store</h2>

  <div className="search-row">
    
   
    <div className="search-box">
      <img src={searchIcon} className="search-icon" />
      <input 
        type="text" 
        placeholder="Search for Kuntal Care" 
      />
    </div>

    
    <button className="bag-btn">
      <img src={bagIcon} alt="Bag" />
    </button>
  </div>
</div>
    </>
  );
}
export default Searchbar;
