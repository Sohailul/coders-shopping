import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { getStoredCart, removeFromDb } from '../../Utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className='container'>
            <h1 className='mt-5'>Shopping cart</h1>
            <div className='row d-flex justify-content-center align-items-center mt-5'>
            <div className="review-items-container col-sm-12 col-md-8">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product ={product}
                        handleRemoveProduct = {handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container col-sm-12 col-md-4 bg-light fixed">
                <Cart cart={cart}>
                        <button onClick={()=>navigate('/shipment')} className="btn">PROCEED TO CHECKOUT</button>
                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Orders;