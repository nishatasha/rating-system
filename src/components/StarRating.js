import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const words = ['Bad', 'Okay', 'Good', 'Very Good', 'Excellent!'];

    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    return (
        <div className='ratings'>
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    selected={index < rating}
                    onClick={() => handleStarClick(index)}
                />
            ))}
            <h2>{words[rating - 1]}</h2>
        </div>
    );
};

export default StarRating;
