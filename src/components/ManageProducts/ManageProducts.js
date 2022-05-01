import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import useProducts from '../../hooks/useProducts';
import './ManageProducts.css';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `https://desolate-beach-70600.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className='container'>
            <h2>Manage Products</h2>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">SL.</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Shipping</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr>
                            <th scope="row" className='count'></th>
                            <td>{product.name.slice(0, 50)}</td>
                            <td>${product.price}</td>
                            <td>${product.shipping}</td>
                            <td>
                                <button onClick={() => handleDelete(product._id)}><BsFillTrashFill /></button>
                                <Link to={`/updateproduct/${product._id}`}><button><BiEdit /></button></Link>

                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;