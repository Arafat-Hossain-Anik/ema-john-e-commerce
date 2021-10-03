import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import setUpCart from '../../utilities/setUpCart';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    useEffect(() => {
        setCart(setUpCart(products));
    });
    const handleAddToCart = product => {
        addToDb(product.key);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {

                    products.map(product => <Products
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/order">
                        <button className="cart-btn">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;