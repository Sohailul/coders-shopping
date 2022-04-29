import React from 'react';
import { BiSupport, BiRightArrow } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { GiReturnArrow } from 'react-icons/gi';
import { FcFlashOn } from 'react-icons/fc';
import Shop from '../Shop/Shop';
import './Home.css';


const Home = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://live.staticflickr.com/65535/52006944508_e3f176d504_h.jpg" className="d-block w-100 img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://live.staticflickr.com/65535/52006944508_e3f176d504_h.jpg" className="d-block w-100 img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://live.staticflickr.com/65535/52006944508_e3f176d504_h.jpg" className="d-block w-100 img-fluid" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <Shop></Shop>
            </div>

            <div className='container flash-sale mt-5'>
                <h2 className='mb-3'><FcFlashOn />Flash Sale <BiRightArrow /></h2>
                <img src='https://live.staticflickr.com/65535/52033707636_ce0e1c38c7_b.jpg' className="d-block w-100 img-fluid mx-auto rounded" alt="" />
            </div>

            <div className="container mt-5">
                <div className='features row d-flex justify-content-center align-items-center'>
                    <div className="support col-md-4 d-flex justify-content-center">
                        <div className='icon fs-1 mx-3'>
                            <BiSupport />
                        </div>
                        <div className='info'>
                            <h4>CUSTOMER SUPPORT</h4>
                            <h6>Need Assistence?</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, in!</p>
                        </div>
                    </div>
                    <div className="secure-payment col-md-4 d-flex justify-content-center">
                        <div className='icon fs-1 mx-3'>
                            <MdPayment />
                        </div>
                        <div className='info'>
                            <h4>SECURED PAYMENT</h4>
                            <h6>Safe and Fast</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, in!</p>
                        </div>
                    </div>
                    <div className="returns col-md-4 d-flex justify-content-center">
                        <div className='icon fs-1 mx-3'>
                            <GiReturnArrow />
                        </div>
                        <div className='info'>
                            <h4>RETURNS</h4>
                            <h6>Easy and Free</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, in!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;