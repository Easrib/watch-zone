import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Shortreview from '../Shortreview/Shortreview';

const Home = (props) => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className="row mb-4">
                <div className="col-md-8 m-auto p-2">
                    <h1>Reviews Of Latest Watches</h1>
                    <p>Are you looking for reviews of latest models watches? Here you will get reviews of all latest watches of Market</p>
                </div>
                <div className="col-md-4 p-2">
                    <img className='img-fluid' src="images/Fossil-FS5437.jpg" alt="" />
                </div>
            </div>
            <div>
                <h1 className='mb-2'>Products Review</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        reviews.slice(0, 2).map(review => <Shortreview key={review.id} review={review}></Shortreview>)
                    }
                </div>
                <button className='btn btn-primary mb-2'><Link className='text-decoration-none header-link text-white' to={'/reviews'}>See All Reviews</Link></button>
            </div>

        </div>
    );
};

export default Home;