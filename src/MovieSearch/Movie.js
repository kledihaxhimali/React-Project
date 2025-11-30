import { useState } from "react";

export function Movie({ movie, onAddMovies, onSelectId }) {
  const [selectedOption, setSelectedOption] = useState("favorites");
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const IdAddMovies = () => {
    onAddMovies(selectedOption, movie.imdbID);
    onSelectId(movie.imdbID);
  };
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`Poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📆</span>
          <span>{movie.Year.slice(0, 4)}</span>
        </p>
        <p>
          <span>📽️</span>
          <span>{movie.Type}</span>
        </p>
        <div>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="select-add"
          >
            <option value="favorites">Favorites</option>
            <option value="watched">Watched </option>
          </select>
          <span role="button" onClick={() => IdAddMovies()} className="btn-add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </div>
      </div>
    </li>
  );
}
