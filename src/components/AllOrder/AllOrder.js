import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AllOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const email = user.email;
        const url = `https://desolate-beach-70600.herokuapp.com/order?email=${email}`;
        fetch(url, {
            headers: {
                'authorization': `${email} ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    return (
        <div className='w-50 mx-auto'>
            <h2>Your orders: {orders.length}</h2>
            {
                orders.map(order => <div key={order._id}>
                    <p>{order.email} : {order.address}</p>
                </div>)
            }
        </div>
    );
};

export default AllOrder;