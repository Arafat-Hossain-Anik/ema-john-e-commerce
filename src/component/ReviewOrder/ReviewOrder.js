import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './ReviewOrder.css';

const ReviewOrder = () => {
    const { products } = useProducts();
    const exist = getStoredCart();
    let existProducts = [];
    if (products.length) {
        for (const key in exist) {
            const product = products.find(product => product.key === key);
            existProducts.push(product);
            product.quantity = exist[key];
        }
    }
    const handlePlaceOrder = () => {
        clearTheCart();
    }
    // existProducts.map(product => console.log(product.key))
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    existProducts.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={existProducts}>
                    <Link to="/placeorder">
                        <button className="cart-btn" onClick={handlePlaceOrder}>Place Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );

};

export default ReviewOrder;