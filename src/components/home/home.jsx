import React, { useEffect } from 'react'
import MovieListing from '../movielisting/movielisting';
import URL from '../api/movieapi'
import { apiKey } from '../api/movieapiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movieSlice';

const home = () => {

    const movieText = "spiderman";
    const dispatch = useDispatch();

  useEffect(() => {
  
    const fetchMovie = async () => {
      try {
       
     const response = await URL.get(
       `?apiKey=${apiKey}&s=${movieText}&type=movie`
     );
        dispatch(addMovies(response.data))
      } catch (error) {
        console.log(error.message)
      }
    

    }
    fetchMovie()
  }, [])
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default home