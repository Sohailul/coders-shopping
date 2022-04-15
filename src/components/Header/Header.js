import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut =()=>{
        signOut(auth);
    }
    return (
        <header>
            <nav className="container navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/' >Coders Shopping</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/' >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/shop' >Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/inventory' >Inventory</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>About</Link>
                            </li>
                            {user ?
                                <button onClick={handleSignOut} className="btn btn-link text-decoration-none text-dark fs-5">Log Out&nbsp;<RiLogoutBoxRFill/></button>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'>Login</Link>
                                </li>
                            }
                            <li className="nav-item ms-5">
                                <Link className="nav-link position-relative" to='/orders'><BsFillCartFill /><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;