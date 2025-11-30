import { useEffect, useState } from "react";
import StarRating from "../StarRating/StarRating";
export function WatchedMovies({ onRemoveWatched, watchedMovie }) {
  const [movieRating, setMovieRating] = useState(watchedMovie.userRating || 0);
  const imdbRating = Math.floor(Math.random() * 5) + 1;
  const Runtime = Math.floor(Math.random() * 100) + 70;
  watchedMovie.imdbRating = imdbRating;
  watchedMovie.Runtime = Runtime;
  const handleRating = (rating) => {
    setMovieRating(rating);
    watchedMovie.userRating = rating;
  };
  useEffect(() => {
    console.log("watchedmovies", watchedMovie);
  }, [watchedMovie]);
  return (
    <li key={watchedMovie.imdbID}>
      <img src={watchedMovie.Poster} alt={`${watchedMovie.Title} poster`} />
      <h3>{watchedMovie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{watchedMovie.imdbRating || "N/A"}</span>
        </p>
        {watchedMovie.userRating ? (
          <p>
            <span>🌟</span>
            <span>{watchedMovie.userRating}</span>
          </p>
        ) : (
          <p>
            <span>🌟</span>
            <span>{movieRating}</span>
          </p>
        )}
        <p>
          <span>⏳</span>
          <span>{watchedMovie.Runtime || "N/A"}</span>
        </p>
        <p>
          <span
            role="button"
            onClick={() => onRemoveWatched(watchedMovie.imdbID)}
            className="btn-delete"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="12" x2="22" y2="12"></line>
            </svg>
          </span>
        </p>
      </div>
      {!watchedMovie.userRating && (
        <div>
          <StarRating maxRating={5} size={20} onRate={handleRating} />
        </div>
      )}
    </li>
  );
}
