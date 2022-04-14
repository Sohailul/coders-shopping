import React from 'react';

const Shipment = () => {
    return (
        <div className='form-container mt-5'>
            <div className='w-50 mx-auto'>
                <h2 className='form-title text-center'>Your Shipping Info</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <br/>
                        <input  type="text" name="name" className="form-control" placeholder="Your Name" required/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <br/>
                        <input readOnly type="email" name="email" className="form-control" placeholder="" required/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <br/>
                        <input type="text" name="address" className="form-control" placeholder="Address"  required/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <br/>
                        <input type="text" name="phone" className="form-control" placeholder="Phone number" required/>
                    </div>
                    {/* <p style={{color: 'red'}}>{error}</p> */}
                    <br/>
                    <input className='form-submit btn btn-primary' type="submit" value="Add Shipping"  required/>
                </form>
                
            </div>
        </div>
    );
};

export default Shipment;