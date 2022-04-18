import React from 'react';
import './GoodItem.css';
import { Link } from 'react-router-dom';

const GoodItem = (props) => {

    const {id, title, price, rating, brand, images, thumbnail} = props;

  return (
    <div className='GoodItem'>
        GoodItem
        <div className="img">
          <img src={thumbnail} alt="" />
        </div>
        <div className="id">{id}</div>
        <div className="title">{title}</div>
        <div className="price">{price}</div>
        <div className="rating">{rating}</div>
        <div className="brand">{brand}</div>
        <div className="images">
          {
            // images.map((img, index) => {
            //   return <img src={img} key={index} />
            // })
          } 
        </div>
        <Link to={'/recipe/' + id}>View recipe</Link>
        <hr />
    </div>
  )
}

export default GoodItem;


// "id": 1,
//       "title": "iPhone 9",
//       "description": "An apple mobile which is nothing like apple",
//       "price": 549,
//       "discountPercentage": 12.96,
//       "rating": 4.69,
//       "stock": 94,
//       "brand": "Apple",
//       "category": "smartphones",
//       "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//       "images": [
//         "https://dummyjson.com/image/i/products/1/1.jpg",
//         "https://dummyjson.com/image/i/products/1/2.jpg",
//         "https://dummyjson.com/image/i/products/1/3.jpg",
//         "https://dummyjson.com/image/i/products/1/4.jpg",
//         "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
//       ]