import React from 'react'

const StarRating = ({ ratings }) => {
  return (
    <div className='star-rating'>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < ratings ? 'gold-star' : 'gray-star'}>
          &#9733;
        </span>
      ))}
    </div>
  )
}

export default StarRating