export function FavoritesMovies({ favMovie, onRemoveFavorites }) {
  const imdbRating = Math.floor(Math.random() * 5) + 1;
  const Runtime = Math.floor(Math.random() * 100) + 70;
  favMovie.imdbRating = imdbRating;
  favMovie.Runtime = Runtime;
  return (
    <li key={favMovie.imdbID}>
      <img src={favMovie.Poster} alt={`${favMovie.Title} poster`} />
      <h3>{favMovie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{favMovie.imdbRating}</span>
        </p>
        {/* <p>
          <span>🏆</span>
          <span>{favMovie.Awards}</span>
        </p> */}
        <p>
          <span>⏳</span>
          <span>{favMovie.Runtime}</span>
        </p>
        <p>
          <span
            role="button"
            onClick={() => onRemoveFavorites(favMovie.imdbID)}
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
    </li>
  );
}
