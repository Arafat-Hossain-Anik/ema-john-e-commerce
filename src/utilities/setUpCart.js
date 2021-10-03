import { getStoredCart } from "./fakedb";

const setUpCart = (products) => {
    const exist = getStoredCart();
    let existProducts = [];
    if (products.length) {
        for (const key in exist) {
            const product = products.find(product => product.key === key);
            existProducts.push(product);
            product.quantity = exist[key];
        }
    }
    return existProducts;
};

export default setUpCart;