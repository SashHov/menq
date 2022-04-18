import React from 'react';
import './CategoryList.css';
import CategoryItem from '../categoryItem/CategoryItem';

const CategoryList = ({ product, category }) => {

    
    return (
        <div className='CategoryList'>
            {
                product.map(el => {
                    return <CategoryItem key={el.id} item={el} />
                })
            }
        </div>
    )
}

export default CategoryList