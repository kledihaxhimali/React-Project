export function WatchedMoviesSummary({ watched }) {
  const average = (arr) => {
    if (arr.length === 0) {
      return 0; // or return any default value you prefer
    }

    return arr.reduce((acc, cur) => acc + cur / arr.length, 0);
  };
  const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0);
  };
  if (watched.length > 3) {
    const avgImdbRating = average(
      watched.map((watchedMovie) => watchedMovie.imdbRating)
    );
    watched.avgImdbRating = avgImdbRating;
    const avgUserRating = average(
      watched.map((watchedMovie) => watchedMovie.userRating)
    );
    watched.avgUserRating = avgUserRating;
  }
  const watchedTime = sum(watched.map((watchedMovie) => watchedMovie.Runtime));
  return (
    <>
      <h2>Movies you have watched</h2>
      <div>
        <p>
          <span>📽️</span>
          <span>{watched.length}</span>
        </p>

        <p>
          <span>⭐️</span>
          <span>{Math.round(watched.avgImdbRating * 10) / 10}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{Math.round(watched.avgUserRating * 10) / 10}</span>
        </p>
        <p>
          <span>Total time:</span>
          <span>{Math.round((watchedTime / 60) * 10) / 10} H</span>
        </p>
      </div>
    </>
  );
}
