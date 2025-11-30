import { useEffect, useState } from "react";
import { NavBar } from "./NavBar/NavBar";
import { Logo } from "./NavBar/Logo";
import { Search } from "./NavBar/Search";
import { NumResults } from "./NavBar/NumResults";
import { SortResults } from "./NavBar/SortResults";
import { MainBody } from "./BodyBoxes/MainBody";
import { Box } from "./BodyBoxes/Box";
import { BoxBar } from "./BodyBoxes/BoxBar";
import { ResultsSummary } from "./MovieSearch/ResultsSummary";
import { MovieResults } from "./MovieSearch/MovieResults";

import { FavoriteSummary } from "./FavoriteMovies/FavoriteSummary";
import { FavoritesResult } from "./FavoriteMovies/FavoritesResult";
import { WatchedMoviesSummary } from "./WatchedMovies/WatchedMoviesSummary";
import { WatchedResult } from "./WatchedMovies/WatchedResult";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Runtime: 148,
    imdbRating: 8.7,
    userRating: 9,
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Runtime: 148,
    imdbRating: 8.6,
    userRating: 6,
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    Runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
];
// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     Runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];
// const tempFavoData = [
//   {
//     imdbID: "tt1375663",
//     Title: "Inceptionnnn",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088762",
//     Title: "Back to the Futureeee",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     Runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

const KEY = "ddb48c61";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [favoritesMovies, setfavoriteMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [movieId, setMovieId] = useState(null);
  const [sortedMovies, setSortedMovies] = useState(movies);
  const [favMovie, setFavMovie] = useState({});
  const [watchedMovie, setWatchedMovie] = useState({});

  function handleSelectMovie(id) {
    setMovieId((movieId) => (movieId === id ? null : id));
    setFavMovie({});
    setWatchedMovie({});
  }

  function handleAddMovies(movie, selectedOption) {
    const idFavExist = favoritesMovies.some(
      (favMovie) => favMovie.imdbID === movie.imdbID
    );
    const idWatchedExist = watched.some(
      (watchedMovie) => watchedMovie.imdbID === movie.imdbID
    );
    if (selectedOption === "favorites") {
      if (!idFavExist) {
        setfavoriteMovies((favoritesMovies) => [
          ...favoritesMovies,
          { ...movie, favorite: true },
        ]);
        setFavMovie({});
      } else {
        alert("This Movie has been added to Favorites");
      }
    } else if (selectedOption === "watched") {
      if (!idWatchedExist) {
        setWatched((watched) => [...watched, { ...movie, watched: true }]);
        setWatchedMovie({});
      } else {
        alert("This Movie has been added to Watched Movies");
      }
    }
  }

  function handleRemoveWatched(imdbID) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== imdbID));
  }
  function handleRemoveFavorites(imdbID) {
    setfavoriteMovies((favoritesMovies) =>
      favoritesMovies.filter((movie) => movie.imdbID !== imdbID)
    );
  }
  const handleSortChange = (sortedMovies) => {
    setSortedMovies(sortedMovies);
  };
  useEffect(
    //stop infinit loop
    function () {
      async function getMovies() {
        try {
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok) throw new Error("Failed to fetch");
          const data = await res.json();
          if (query.length >= 12)
            throw new Error("You can only write text from 4 to 12 letters");
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          console.log(data);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      getMovies();
    },
    [query] //dependency array
  );

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
        <SortResults movies={movies} onSortChange={handleSortChange} />
      </NavBar>
      <MainBody>
        <Box>
          {!error && (
            <>
              <BoxBar watched={watched}>
                <ResultsSummary movies={movies} />
              </BoxBar>
              <MovieResults
                sortedMovies={sortedMovies}
                onAddMovies={handleAddMovies}
                onSelectId={handleSelectMovie}
              ></MovieResults>
            </>
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          <BoxBar favoritesMovies={favoritesMovies}>
            <FavoriteSummary favoritesMovies={favoritesMovies} />
          </BoxBar>
          <FavoritesResult
            movieId={movieId}
            favoritesMovies={favoritesMovies}
            onRemoveFavorites={handleRemoveFavorites}
            favMovie={favMovie}
            setFavMovie={setFavMovie}
          />
        </Box>
        <Box>
          <BoxBar watched={watched}>
            <WatchedMoviesSummary watched={watched} />
          </BoxBar>
          <WatchedResult
            watched={watched}
            onRemoveWatched={handleRemoveWatched}
            movieId={movieId}
            watchedMovie={watchedMovie}
            setWatchedMovie={setWatchedMovie}
          />
        </Box>
      </MainBody>
    </>
  );
}
