import React from 'react'

const MovieCard = ({data}) => {
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img
            src={data.Poster !== "N/A" ? data.Poster : "https://placewaifu.com/image/200"}
            alt={data.Title}
          />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard