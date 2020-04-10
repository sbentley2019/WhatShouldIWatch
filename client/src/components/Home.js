import React from "react";
import "./Home.scss";
import { categories } from "../testData.js";

export default function Home(props) {
  return (
    <>
      <h1>Browse</h1>
      <div className="browse-div">
        {categories.map((item, index) => (
          <figure key={index}>
            <img src={item.src} alt={item.alt} />
          </figure>
        ))}
      </div>
    </>
  );
}
