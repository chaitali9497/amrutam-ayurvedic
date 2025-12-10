import "../styles/ProductHighlights.css";
import highlightsIcon from "../assets/product/highlights.png";

function ProductHighlights({ data }) {

  const fourCards = data.slice(0, 4);

  return (
    <div className="highlights-wrapper">
      <h3 className="highlights-title">
         <img src={highlightsIcon } alt="" className="hi-icon" />
       Products Highlights</h3>

      <div className="highlights-container">
        {fourCards.map((h, i) => (
          <div className="highlight-card" key={i}>
            <p>{h}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductHighlights;
