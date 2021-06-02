import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from './Product';
import '../assets/styles/components/Products.css';

const Products = () => {
    const {state, addToCart } = useContext(AppContext); 
    const { products } = state;

    const handleAddToCart = (product) => () => {
        addToCart(product);
    };

    return (
        <div className="products">
            <div className="products-items">
                {products.map(p => (
                    <Product key={p.id} product={p} handleAddToCart={handleAddToCart}/>
                ))}
            </div>
        </div>
    )
};


export default Products;