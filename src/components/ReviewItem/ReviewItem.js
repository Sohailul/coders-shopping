import React from 'react';
import './ReviewItem.css';
import {BsTrashFill} from 'react-icons/bs';

const ReviewItem = (props) => {
    const {product, handleRemoveProduct} = props;
    const {name, img, price, shipping, quantity} = product;
    return (
        <div className='review-item border'>
            <div>
                <img src={img} alt="" className='img-fluid'/>
            </div>
            <div className="review-item-details-container d-flex justify-content-evenly w-100">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                        { name.length > 20 ? name.slice(0, 20) + '...': name }
                    </p>
                    <p>Price: <span className='orange-color'>${price}</span></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container d-flex align-items-center">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                    <BsTrashFill/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;