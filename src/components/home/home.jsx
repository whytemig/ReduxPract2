import React, { useEffect } from 'react'
import MovieListing from '../movielisting/movielisting';

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movieSlice';

const home = () => {

    
    const dispatch = useDispatch();

  useEffect(() => {

      dispatch(fetchAsyncMovies());
      dispatch(fetchAsyncShows());
    
  }, [dispatch])
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default home