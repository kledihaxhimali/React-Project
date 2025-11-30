export function FavoriteSummary({ favoritesMovies }) {
  const average = (arr) => {
    if (arr.length === 0) {
      return 0; // or return any default value you prefer
    }

    return arr.reduce((acc, cur) => acc + cur / arr.length, 0);
  };
  const avgImdbRating = average(
    favoritesMovies.map((watchedMovie) => watchedMovie.imdbRating)
  );
  const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0);
  };
  const favoriteTime = sum(
    favoritesMovies.map((watchedMovie) => watchedMovie.Runtime)
  );
  return (
    <>
      <h2>Movies added on your list</h2>
      <div>
        <p>
          <span>📽️</span>
          <span>{favoritesMovies.length}</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>⌛</span>
          <span>{Math.round((favoriteTime / 60) * 10) / 10} H</span>
        </p>
      </div>
    </>
  );
}
