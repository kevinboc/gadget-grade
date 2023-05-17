import React, { useState } from 'react';
import { BsStarFill, BsStar } from "react-icons/bs"; // import the star icons
import PropTypes from "prop-types"

const StarRating = ({ onRatingChange }) => {
  StarRating.propTypes = {
    onRatingChange: PropTypes.func,
  } 

  const [localRating, setLocalRating] = useState(0);

  const handleStarClick = (star) => {
    setLocalRating(star);
    onRatingChange(star);
  };

  const stars = Array(5).fill(0).map((_, i) => {
    if (i < localRating) {
      return <BsStarFill onClick={() => handleStarClick(i + 1)} />;
    } else {
      return <BsStar onClick={() => handleStarClick(i + 1)} />;
    }
  });

  return (
    <div style={{display: 'flex'}}>
      {stars.map((star, i) => React.cloneElement(star, { key: i }))}
    </div>
  );
};

export default StarRating;
