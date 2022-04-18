import {Link} from 'react-router-dom';
import './CategoryItem.css';
import { API_URL } from '../../config';

const CategoryItem = ({item}) => {
  return (
    <div className='CategoryItem'>
        <div className="img">
          <img src={item.thumbnail} />
        </div>
        <div className="id">{item.id}</div>
        <div className="title">{item.title}</div>
        <div className="description">{item.description}</div>
        <div className="price">price: {item.price}</div>
        <div className="discountPercentage">{item.discountPercentage}</div>
        <div className="rating">{item.rating}</div>
        <div className="stock">{item.stock}</div>
        <div className="brand">{item.brand}</div>
        <div className="category">{item.category}</div>
        <div className="images">
            {
                // item.images.map((img, index) => {
                //     return <img src={img} key={index} />
                // })
            }
        </div>
        <Link className='btn' to={'/products/' + 'category/' + item.category}>Watch {item.category} </Link>
        <hr />
    </div>
  )
}

export default CategoryItem;
//  https://dummyjson.com/products/category/smartphones



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