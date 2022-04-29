import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddProducts = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        const url = 'http://localhost:5000/product';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
        toast('Product Added Successfully');
        e.target.reset();
    };

    return (
        <div>

            <div className='w-50 mx-auto'>
                <h2>Add Products</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true })} />
                    <input className='mb-2' placeholder='Price' type='number' {...register("price")} />
                    <input className='mb-2' placeholder='Shipping' type='number' {...register("shipping")} />
                    <input className='mb-2' placeholder='Photo URL' {...register("img")} />
                    <input type="submit" value="Add Product" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddProducts;