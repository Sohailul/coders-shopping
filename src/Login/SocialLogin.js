import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [user] = useAuthState(auth);
    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    if (googleUser || githubUser) {
        fetch('https://desolate-beach-70600.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify({
                email: user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('accessToken', data.accessToken);
                navigate('/shop');
            });
    }

    const googleSignIn = () => {
        signInWithGoogle();
    }
    const gitHubSignIn = () => {
        signInWithGithub();
    }
    return (
        <div>
            <div className='form-group d-flex justify-content-center'>
                <button
                    onClick={googleSignIn}
                    className="btn w-50"
                    style={{ backgroundColor: "#c5cdf1" }}><FcGoogle />&nbsp;SignIn with Google</button>
            </div>
            <div className='form-group d-flex justify-content-center mt-3'>
                <button
                    onClick={gitHubSignIn}
                    className="btn w-50" style={{ backgroundColor: "#c5cdf1" }}><BsGithub />&nbsp;SignIn with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;