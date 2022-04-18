import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { getAllProducts } from '../../api';

const Header = () => {

  // const [category, setCategory] = useState([]);
  // const [product, setProduct] = useState([]);
  const [option, setOption] = useState('I skzbane');



  // useEffect(() => {
  //   getAllProducts().then((data) => {
  //     setProduct(data.products);
  //     setCategory(data.products.map(el => el.price));
  //     // data.products.map(el => {
  //     //   //console.log(el.price);
  //     //   return setCategory(el.price);
  //     // })
  //     // //console.log(data.products);
  //   });
  // }, []);

  // console.log(category);


  // const options = [
  //   { value: 'price', label: 'Sort by price', func: sortPrice },
  //   { value: 'rating', label: 'Sort by rating', func: sortPrice },
  //   { value: 'brand', label: 'Sort by brand', func: sortPrice },
  // ];



  const handleChange = (e) => {
    console.log('You Select!!', e.target.value);
    setOption({ option: option });
  }

  // const sortByPrice = () => {
  //   category.sort((a, b) => {
  //     return a - b;
  //   });
  //   console.log(category);
  //   setCategory([...category]);
  // }


  return (
    <div className='Header'>
      <Link className='name' to={'/'}>ArmElectronicShop</Link>

      
    </div>
  )
}

export default Header;