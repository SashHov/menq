import React from 'react';
import './Recipe.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllProductById } from '../../api';

const Recipe = () => {



  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});
  const [recipeImage, setRecipeImage] = useState([]);

  useEffect(() => {
    getAllProductById(id).then((data) => {
      //console.log(data);
      setRecipe(data);
      setRecipeImage(data.images);
      //console.log(data.images);
    });
  }, []);

  //console.log(recipe);
  
  

  return (
    <div className='Recipe'>
      Recipe
      <button className='btn' onClick={() => navigate(-1)}>GO BACK</button>
      <div className="id">{recipe.id}</div>
      <div className="title">{recipe.title}</div>
      <div className="description">{recipe.description}</div>
      <div className="price">{recipe.price}</div>
      <div className="discountPercentage">{recipe.discountPercentage}</div>
      <div className="rating">{recipe.rating}</div>
      <div className="brand">{recipe.brand}</div>
      <div className="category">{recipe.category}</div>
      <div className="images">
        {/* <img src={recipe.thumbnail} /> */}
        {
          recipeImage.map((img, index) => <img src={img} key={index} />)
        }
      </div>
    </div>
  )
}

export default Recipe