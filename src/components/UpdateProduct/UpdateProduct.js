import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const shipping = event.target.shipping.value;
        const img = event.target.img.value;

        const updatedProduct = { name, price, shipping, img };

        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
        toast('Product Updated Successfully');
        event.target.reset();
        navigate('/manageproducts');
    };
    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2>Update Products</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit}>
                    <input type="text" name="name" className='form-control' placeholder="Product Name" />
                    <input type="number" name="price" className='form-control' placeholder="Product Price" />
                    <input type="number" name="shipping" className='form-control' placeholder="Shipping" />
                    <input type="text" name="img" className='form-control' placeholder="Image url" />
                    <input type="submit" value="Update Product" className='btn btn-info' />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateProduct;