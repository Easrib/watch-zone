import React from 'react';
import useReviews from '../../hooks/useReviews';
import Shortreview from '../Shortreview/Shortreview';




const Reviews = () => {

    const [reviews, setReviews] = useReviews();

    return (
        < div >
            <h1>All Reviews</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    reviews.map(review => <Shortreview review={review}></Shortreview>)
                }
            </div>
        </div>
    );
};

export default Reviews;