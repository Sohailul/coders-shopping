import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    console.log(props.children);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = parseFloat(quantity + product.quantity);
        total = parseFloat(total + product.price * product.quantity);
        shipping = shipping + (parseFloat(product.shipping));
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
                    <td><p>{quantity}</p></td>
                </tr>
                <tr>
                    <td><p>Total price: </p></td>
                    <td><p>${total}</p></td>
                </tr>
                <tr>
                    <td><p>Total Shipping:</p></td>
                    <td> <p>${shipping}</p></td>
                </tr>
                <tr>
                    <td><p>Tax: </p></td>
                    <td><p>${tax}</p></td>
                </tr>
                <tr>
                    <td><h3>Grand Total:</h3></td>
                    <td><h3>${grandTotal.toFixed(2)}</h3></td>
                </tr>
            </table>
            {props.children}
        </div>

    );
};

export default Cart;