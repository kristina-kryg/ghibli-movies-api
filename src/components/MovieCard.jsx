import { useState } from "react";

function MovieCard({ movie }) {
  const [isLiked, setLike] = useState(false);
  function onLiked() {
    setLike(!isLiked);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.image} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onLiked}>
            <i
              className={`${isLiked ? "fa-solid" : "fa-regular"} fa-heart`}
            ></i>
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
