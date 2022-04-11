import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) =>{
        console.log(product);
        // do not do this: cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        
        <div className='container shop-container mt-5'>
            <h4 className='fs-5' style={{color: 'gray'}}>Shop Now</h4>
            <h2 className='mb-5 fw-bold'>Latest Products <span>{cart.length}</span></h2>
            <div className="products-container row g-3 d-flex justify-content-center">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default Shop;