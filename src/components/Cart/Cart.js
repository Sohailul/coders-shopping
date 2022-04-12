import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    console.log(props.children);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <table className='table table-striped'>
                <tr>
                    <td><h4>Order Summary</h4></td>
                </tr>
                <tr>
                    <td><p>Selected Items: </p></td>
                    <td>{quantity}</td>
                </tr>
                <tr>
                    <td><p>Total price: </p></td>
                    <td>${total}</td>
                </tr>
                <tr>
                    <td><p>Total Shipping:</p></td>
                    <td> ${shipping}</td>
                </tr>
                <tr>
                    <td><p>Tax: </p></td>
                    <td>{tax}</td>
                </tr>
                <tr>
                    <td><h5>Grand Total:</h5></td>
                    <td><h5>{grandTotal.toFixed(2)}</h5></td>
                </tr>
            </table>
            {props.children}
        </div>
    );
};

export default Cart;