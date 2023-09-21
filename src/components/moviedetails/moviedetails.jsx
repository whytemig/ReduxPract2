import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMoviesOrShowsDetails, getDetails, removeSelected } from '../../features/movieSlice';

 const  MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getDetails)
  // console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowsDetails(imdbID))
    return () => {
      dispatch(removeSelected())
    }
  }, [dispatch, imdbID])

   return (
     <div className="movie-selection">
       {
         Object.keys(data).length === 0 ? (<div>
           ..... Loading
         </div>) : (
             <>
              <div className="section-left">
         <div className="movie-title">{data.Title}</div>
         <div className="movie-rating">
           <span>
             IMDB RATING <i className="fa fa-star"></i> : {data.imdbRating}
           </span>
           <span>
             IMDB Votes <i className="fa fa-thumps-up"></i> : {data.imdbVotes}
           </span>
           <span>
             Runtime <i className="fa fa-file"></i> : {data.imdbRuntime}
           </span>
           <span>
             Year <i className="fa fa-calendar"></i> : {data.Year}
           </span>
         </div>
         <div className="movie-plot">{data.Plot}</div>
         <div className="movie-info">
           <div>
             <span>Director :</span>
             <span>{data.Director}</span>
           </div>
           <div>
             <span>Stars : </span>
             <span>{data.Actors}</span>
           </div>
           <div>
             <span>Generes : </span>
             <span>{data.Genre}</span>
           </div>
           <div>
             <span>Languages : </span>
             <span>{data.Language}</span>
           </div>
           <div>
             <span>Awards : </span>
             <span>{data.Awards}</span>
           </div>
         </div>
       </div>
       <div className="section-right">
         <img
           src={
             data.Poster !== "N/A"
               ? data.Poster
               : "https://placewaifu.com/image/200"
           }
           alt={data.Title}
         />
               </div>
               </>
         )
       }
      
     </div>
   );
}

export default MovieDetails
