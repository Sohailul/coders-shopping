import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/');
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='text-center'>Please Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group fs-5">
                    <input ref={emailRef} type="email" name="email" className="form-control p-3 fs-5" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br />
                <div className="form-group fs-5">

                    <input ref={passwordRef} type="password" name="password" className="form-control p-3 fs-5" placeholder="Password" />
                </div>
                <br />
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <br />
                <div className='form-group d-flex justify-content-center'>
                    <button type="submit" className="btn w-100 p-3 fs-5" style={{ backgroundColor: "#c5cdf1" }}>Login</button>
                </div>
                <p className='fw-bold text-center mt-2'>Don’t have an account? <span><Link to='/register' className='text-decoration-none'>Register now</Link></span></p>
                <p className='fw-bold text-center mt-2'>Forgot Password? <span><Link to='/login' onClick={resetPassword} className='text-decoration-none'>Reset Password</Link></span></p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;