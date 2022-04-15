import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='form-container mt-5'>
            <div className='w-50 mx-auto'>
                <h2 className='form-title text-center'>Your Shipping Info</h2>
                <form>
                    <div className="form-group fs-5">
                        <label htmlFor="name">Your Name</label>
                        <br/>
                        <input  type="text" name="name" className="form-control p-3 fs-5" placeholder="Your Name" required/>
                    </div>
                    <br/>
                    <div className="form-group fs-5">
                        <label htmlFor="email">Your Email</label>
                        <br/>
                        <input readOnly type="email" value={user.email} name="email" className="form-control p-3 fs-5" placeholder="" required/>
                    </div>
                    <br/>
                    <div className="form-group fs-5">
                        <label htmlFor="address">Address</label>
                        <br/>
                        <input type="text" name="address" className="form-control p-3 fs-5" placeholder="Address"  required/>
                    </div>
                    <br/>
                    <div className="form-group fs-5">
                        <label htmlFor="phone">Phone Number</label>
                        <br/>
                        <input type="text" name="phone" className="form-control p-3 fs-5" placeholder="Phone number" required/>
                    </div>
                    {/* <p style={{color: 'red'}}>{error}</p> */}
                    <br/>
                    <button className='form-submit btn btn-primary w-100 p-2 fs-5 mx-auto d-block' type="submit">Add to Shipping&nbsp;<FaShippingFast/></button>
                </form>
                
            </div>
        </div>
    );
};

export default Shipment;