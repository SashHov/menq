import React from 'react';
import './GoodList.css';
import GoodItem from '../goodItem/GoodItem';

const GoodList = ({goods}) => {

    //console.log(goods);
    const elements = goods.map((el) => {
        return <GoodItem key={el.id + '' + el.title} {...el} />
    })


    return (
        <div className='GoodList'>
            GoodList
            {elements}
        </div>
    )
}

export default GoodList;