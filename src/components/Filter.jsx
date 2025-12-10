import React from "react";
import "../styles/Filter.css";

const Filters = ({ filters, active, onSelect }) => {
  return (
    <div className="filters">
      {filters.map((item) => (
        <button
          key={item.id}
          className={active === item.id ? "active" : ""}
          onClick={() => onSelect(item.id)}
        >
          <img src={item.icon} alt={item.label} />
        </button>
      ))}
    </div>
  );
};

export default Filters;
