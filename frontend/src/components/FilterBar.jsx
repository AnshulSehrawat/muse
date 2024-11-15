import React, { useState, useEffect } from 'react';
import './Styles/FilterBar.css';
import axios from 'axios';
import UncheckedBox from '../Assets/images/unchecked-box.png';
import CheckedBox from '../Assets/images/checked-box.png';

function FilterBar(props) {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("none");

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category-list')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    console.log("Applying category filter:", selectedCategory);
    props.applycategory(selectedCategory);
  }, [selectedCategory, props]);

  function clickhandle(categoryName) {
    setSelectedCategory(prevCategory => 
      prevCategory === categoryName ? "none" : categoryName
    );
  }

  return (
    <div className='FilterBarMain'>
      <div className='Categoryheading'>Product Categories</div>
      <div className='FilterBar'>
        {data.map((category, index) => (
          <button onClick={() => clickhandle(category)} key={index} className='category-button'>
            <img src={selectedCategory === category ? CheckedBox : UncheckedBox} alt={selectedCategory === category ? "Checked" : "Unchecked"} />
            <h3>{category}</h3>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
