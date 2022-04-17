import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    if(user || user1){
        navigate('/shop');
    }

    const googleSignIn = () =>{
        signInWithGoogle();
    }
    const gitHubSignIn = () =>{
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