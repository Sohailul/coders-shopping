import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import useProducts from '../../hooks/useProducts';
import { getStoredCart, removeFromDb } from '../../Utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    return (
        <div className='container'>
            <h1 className='mt-5 text-center'>Shopping cart</h1>
            <div className='row d-flex justify-content-center align-items-center mt-5'>
                <div className="review-items-container col-sm-12 col-md-8">
                    {
                        cart.map(product => <ReviewItem
                            key={product._id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container col-sm-12 col-md-4 bg-light fixed">
                    <Cart cart={cart}>
                        <div className='text-center'>
                            <button onClick={() => navigate('/shipment')} className="btn">PROCEED TO CHECKOUT &nbsp;<AiOutlineArrowRight /></button>
                        </div>
                    </Cart>
                    <div className='mt-3'>
                        <Link to='/shop' className='text-decoration-none text-dark'><AiOutlineArrowLeft />&nbsp;Continue to shopping</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Orders;