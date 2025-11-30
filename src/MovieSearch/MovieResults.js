import { Movie } from "./Movie";

export function MovieResults({ sortedMovies, onAddMovies, onSelectId }) {
  return (
    <ul className="list">
      {sortedMovies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onAddMovies={(selectedOption) => onAddMovies(movie, selectedOption)}
          onSelectId={onSelectId}
        />
      ))}
    </ul>
  );
}
