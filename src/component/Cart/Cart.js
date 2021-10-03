import React from 'react';

const Cart = (props) => {
    const { cart, children } = props;
    // console.log(cart);
    const totalPrice = (previous, current) => previous + current.price;
    const total = cart.reduce(totalPrice, 0);
    const totalOrder = (previous, current) => previous + current.quantity;
    const totalItems = cart.reduce(totalOrder, 0);
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Ordered:{totalItems}</h5>
            <h5>Total Price:{total}</h5>
            {
                children
            }
        </div>
    );
};

export default Cart;