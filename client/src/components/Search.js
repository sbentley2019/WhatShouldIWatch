import React, { useState, useEffect } from "react";
import { genre } from "../testData";
import "./Search.scss";

export default function Search(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([...categories, ...genre]);
  }, []);

  return (
    <>
      <h1>Search</h1>
      <table>
        <thead>
          <tr>
            <th>genre</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => {
            return (
              <tr>
                <td>{item}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
