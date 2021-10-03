import React from 'react';
import './Products.css';

const Products = (props) => {
    // console.log(props);
    const { name, price, stock, img, star, seller } = props.product;
    return (
        <div className="products-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="products-details">
                <h3>{name}</h3>
                <p><small>by: {seller}</small></p>
                <div className="products-description">
                    <div>
                        <h4>Price:$ {price}</h4>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={() => props.handleAddToCart(props.product)} className="cart-btn">Add To Cart</button>
                    </div>
                    <div>
                        <p>{star} *</p>
                        <h5>Features</h5>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;