import React from 'react';
import Shop from '../Shop/Shop';
import './Home.css';


const Home = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                    <img src="https://live.staticflickr.com/65535/52006944508_e3f176d504_h.jpg" className="d-block w-100 img-fluid" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://live.staticflickr.com/65535/52006944508_e3f176d504_h.jpg" className="d-block w-100 img-fluid" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://live.staticflickr.com/65535/52006944508_e3f176d504_h.jpg" className="d-block w-100 img-fluid" alt="..."/>
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
        </div>
        
    );
};

export default Home;