import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    // console.log(props.item);
    const { product } = props;
    const { name, img, price, quantity } = product;
    return (
        <div className="products-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="products-details">
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <h4>Quantity: {quantity}</h4>
            </div>
        </div>
    );
};

export default ReviewItem;