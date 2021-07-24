import React from "react";
import ImageOne from "../images/pizza.jpg";
import ImageTwo from "../images/pizza-1.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Veg Pizza</h2>
          <p className="mb-2">Extra loaded Cheese and veggies</p>
          <span>Rs.99</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Non-Veg Pizza</h2>
          <p className="mb-2">BBQ Chicken with extra spice</p>
          <span>Rs.229</span>
        </div>
      </div>
    </>
  );
};

export default Content;
