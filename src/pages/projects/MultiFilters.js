import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Brand } from "../../components/menu/Brand";
import { items } from "./items";

export const MultiFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  let filters = ["Product", "Digital"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    // NavBar Content
    <div>
      <div className="buttons-container">
        <Brand brand="../../images/logo.png" className="canvas-logo" />
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`navbar-width button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
        {/* NavBar Content */}
        <Link
          className="navbar-width projects-navbar-link"
          to={"/InformationIndex"}
        >
          Information
        </Link>
      </div>

      <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <img className="trynow" src={item.img} />
            <Link to={item.href}>
              <div className="trythis"></div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
