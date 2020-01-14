import React from 'react';
import Rating from './Rating';

export const Card = ({ movie }) => {
  return (
    <div >
      <div className='card' >
        <div className='card-body'>
          <Rating   count={movie.star}/>
        </div>
        <img src={movie.img} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{movie.name}</h5>
          <p className='card-text'> {movie.duration} - {movie.year} </p>
        </div>
      </div>
    </div>
  );
};
