import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='text-center'>Please Login</h2>
            <form>
                <div className="form-group fs-5">
                    
                    <input type="email" className="form-control p-3 fs-5" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br />
                <div className="form-group fs-5">
                    
                    <input type="password" className="form-control p-3 fs-5" placeholder="Password" />
                </div>
                <br />
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <br/>
                <div className='form-group d-flex justify-content-center'>
                <button type="submit" className="btn w-100 p-3 fs-5" style={{backgroundColor: "#c5cdf1"}}>Login</button>
                </div>
                <p className='fw-bold text-center mt-2'>Don’t have an account? <span><Link to='/register' className='text-decoration-none'>Register now</Link></span></p>
            </form>
        </div>
    );
};

export default Login;