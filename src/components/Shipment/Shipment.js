import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

const Shipment = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const onSubmit = (data, e) => {
        console.log(data);
        const url = 'http://localhost:5000/order';
        fetch(url, {
            method: 'POST',
            headers: {
                //'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
        toast('Order Added Successfully');
        e.target.reset();
        navigate('/allorder');
    };

    return (
        <div>

            <div className='w-50 mx-auto'>
                <h2>Add Orders</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true })} />
                    <input className='mb-2' value={user?.email} type='email' {...register("email")} />
                    <input className='mb-2' placeholder='Address' type='text' {...register("address")} />
                    <input className='mb-2' placeholder='Total Price' type='number' {...register("price")} />
                    <input type="submit" value="Submit Order" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Shipment;