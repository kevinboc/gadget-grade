import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"; // import the star icons
import PropTypes from "prop-types"

const StarRating = ({rating}) => {

  // Validating props
  StarRating.propTypes = {
    rating: PropTypes.number
  } 

  // determine the value of the filled stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;
  
  // generate the stars
  const stars = [
    ...Array(fullStars).fill(<BsStarFill />),
    ...Array(halfStars).fill(<BsStarHalf />),
    ...Array(emptyStars).fill(<BsStar />)
  ];

  return (
    <div style={{display: 'flex'}}>
      {stars.map((star, i) => React.cloneElement(star, { key: i }))}
    </div>
  );
};

export default StarRating;
