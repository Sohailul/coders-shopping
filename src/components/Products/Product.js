import React from 'react';
import {BsFillCartFill} from 'react-icons/bs';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { name, price, img } = product;
    return (
        <div className='col-sm-12 col-md-4 d-flex justify-content-center'>
            <div className="card" style={{ width: "25rem" }}>
            <img src={img} className="mx-auto d-block img-fluid w-75" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name.slice(0,30)}</h5>
                <p className="card-text fw-bold">Price: ${price}</p>
                <div className='d-grid'>
                <button onClick={()=>handleAddToCart(product)} className="btn justify-content-center"><span><BsFillCartFill/>&nbsp;</span>Add to cart</button>
                </div>
            </div>
        </div>
        </div>

    );
};

export default Product;