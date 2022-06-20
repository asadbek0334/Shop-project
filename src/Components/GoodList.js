import React from 'react';
import GoodItem from './GoodItem'

function GoodList(props) {
    const { goods = [] , addToBasket } = props; 


    if(!goods.length) {
        return <h2>Nothing here</h2>
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodItem key={item.id} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    )
}

export default GoodList;