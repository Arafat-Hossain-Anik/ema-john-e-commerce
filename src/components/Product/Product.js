import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
const Product = (props) => {
    const { img, name, price, seller, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="product-name"> {name}</h3>
                <p> <small>By: {seller}</small> </p>
                <p>Price: {price}</p>
                <p> <small>Only {stock} left in stock-order-soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;