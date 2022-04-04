import React from 'react';
import useReviews from '../../hooks/useReviews';



const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        < div >
            <h1>All Reviews</h1>
        </div >
    );
};

export default Reviews;