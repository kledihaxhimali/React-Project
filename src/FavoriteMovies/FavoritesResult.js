import { useEffect, useState } from "react";
import { FavoritesMovies } from "./FavoritesMovies";
import Loader from "../Loader/Loader";
const KEY = "ddb48c61";
export function FavoritesResult({
  onRemoveFavorites,
  favoritesMovies,
  movieId,
  setFavMovie,
}) {
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function getFavMoviesDetails() {
        setLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${movieId}`
        );
        const data = await res.json();
        setFavMovie(data);
        console.log(data);
        setLoading(false);
        if (data.Awards === null) {
          return "No Awards ";
        }
      }

      getFavMoviesDetails();
    },
    [movieId, setFavMovie]
  );
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ul className="list">
          {favoritesMovies.map((favMovie) => (
            <FavoritesMovies
              key={favMovie.movieId}
              favMovie={favMovie}
              onRemoveFavorites={onRemoveFavorites}
            />
          ))}
        </ul>
      )}
    </>
  );
}
