import React from 'react';
import useProducts from '../../hooks/useProducts';
import './OrderReview.css';
const OrderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>{products.length}</h1>
            <h1>this is order review page</h1>
        </div>
    );
};

export default OrderReview;