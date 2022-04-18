import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getFilteredByCategoryProducts } from '../../api';
import GoodList from '../../components/goodList/GoodList';

const Category = () => {

  const {name} = useParams();
  //console.log();
  const navigate = useNavigate();
  const [goods, setGoods] = useState([]);

  
  

  

  useEffect(() => {
    getFilteredByCategoryProducts(name).then((data) => {
      setGoods(data.products);
      //console.log(data.products);
    });
  }, []);


  return (
    <div className='Category'>
      Category 
      <br />
      <button onClick={() => navigate(-1)}>GO BACK</button>
      <GoodList goods={goods} />
    </div>
  )
}

export default Category;