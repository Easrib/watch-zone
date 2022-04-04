import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='row mb-4'>
            <div className="col-md-4">
                <h1>Watch <span>Zone</span></h1>
            </div>
            <div className="col-md-8 nav-links ">
                <Link className='text-decoration-none header-link' to={'/'}>Home</Link>
                <Link className='text-decoration-none header-link' to={'/reviews'}>Reviews</Link>
                <Link className='text-decoration-none header-link' to={'/dashboard'}>Dashboard</Link>
                <Link className='text-decoration-none header-link' to={'/blogs'}>Blogs</Link>
                <Link className='text-decoration-none header-link' to={'/about'}>About Us</Link>
            </div>
        </div>
    );
};

export default Header;