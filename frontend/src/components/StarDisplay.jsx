import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"; // import the star icons
import PropTypes from "prop-types"

const StarDisplay = ({ rating = 0 }) => {
  StarDisplay.propTypes = {
    rating: PropTypes.number
  } 

  const fullStars = Math.floor(rating);
  const halfStars = (rating % 1 >= 0.5) ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const stars = [
    ...Array(fullStars).fill(<BsStarFill />),
    ...Array(halfStars).fill(<BsStarHalf />),
    ...Array(emptyStars >= 0 ? emptyStars : 0).fill(<BsStar />)
  ];

  return (
    <div style={{display: 'flex'}}>
      {stars.map((star, i) => React.cloneElement(star, { key: i }))}
    </div>
  );
};

export default StarDisplay;
