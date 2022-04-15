import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if (user) {
        console.log('user', user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/login');

    }

    const googleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div className='register w-50 mx-auto mt-5 '>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <div class="form-group fs-5">
                    <label>Name</label>
                    <input type="text" name='name' class="form-control p-3 fs-5" placeholder="Your name" />
                </div>
                <br />
                <div class="form-group fs-5">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name='email' class="form-control p-3 fs-5" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br />
                <div class="form-group fs-5">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name='password' class="form-control p-3 fs-5" placeholder="Password" />
                </div>
                <br />
                <div className="form-check">
                    <input onClick={() => setAgree(!agree)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className={agree ? 'text-primary' : 'text-danger'} for="exampleCheck1">Accept Terms and Conditions</label>
                </div>
                <br />
                <div className='form-group d-flex justify-content-center'>
                    <button disabled={!agree} type="submit" class="btn w-100 p-3 fs-5" style={{ backgroundColor: "#c5cdf1" }}>Register</button>
                </div>
                <p className='fw-bold text-center mt-2'>Already have an account? <span><Link to='/login' className='text-decoration-none'>Login</Link></span></p>
            </form>
            <div className='form-group d-flex justify-content-center'>
                <button onClick={googleSignIn} class="btn w-50" style={{ backgroundColor: "#c5cdf1" }}><FcGoogle />&nbsp;SignIn with Google</button>
            </div>
            <div className='form-group d-flex justify-content-center mt-3'>
                <button class="btn w-50" style={{ backgroundColor: "#c5cdf1" }}><BsGithub />&nbsp;SignIn with Github</button>
            </div>
        </div>
    );
};

export default Register;