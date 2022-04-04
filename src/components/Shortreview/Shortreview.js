import React from 'react';

const Shortreview = (props) => {
    const { name, pname, review, rating } = props.review;
    return (


        <div className="col">
            <div className="card-body">
                <h5 className="card-title">Reviewer name: {name}</h5>
                <h6 className="card-text">Product Name:{pname}</h6>
                <p className="card-text">Review: {review}</p>
                <p className="card-text">Rating: {rating}</p>
            </div>
        </div>

    );
};

export default Shortreview;