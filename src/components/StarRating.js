import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const words = ['Worse', 'Bad', 'Okay', 'Good', 'Excellent'];

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
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
