import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='bg-dark p-2 mt-5 text-center'>
            <p className='text-white mt-3'>Copyright © {year} || All right Reserved</p>
        </div>
    );
};

export default Footer;