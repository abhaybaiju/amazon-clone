import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product_info">
                <div>{title}</div>
                <div className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </div>
                <div className="product_rating">
                    {
                        Array(rating).fill().map( (_) => (
                            <p>⭐</p>
                        ) )

                    }
                </div>
            </div>
            <img src={image}></img>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;
