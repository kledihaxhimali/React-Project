import { useEffect, useState } from "react";
import { WatchedMovies } from "./WatchedMovies";
import Loader from "../Loader/Loader";
const KEY = "12b4fdd3";
export function WatchedResult({
  onRemoveWatched,
  watched,
  setWatchedMovie,
  movieId,
}) {
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function getWatchedMoviesDetails() {
        setLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${movieId}`
        );
        const data = await res.json();
        setWatchedMovie(data);
        console.log(data);
        setLoading(false);
      }
      getWatchedMoviesDetails();
    },
    [movieId, setWatchedMovie]
  );
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ul className="list">
          {watched.map((watchedMovie) => (
            <WatchedMovies
              key={watchedMovie.movieId}
              onRemoveWatched={onRemoveWatched}
              watchedMovie={watchedMovie}
            />
          ))}
        </ul>
      )}
    </>
  );
}
