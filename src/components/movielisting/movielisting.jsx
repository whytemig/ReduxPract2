import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movieSlice';

const movielisting = () => {

  const movies = useSelector(getAllMovies);
  console.log(movies);
  return (
    <div>movielisting</div>
  )
}

export default movielisting