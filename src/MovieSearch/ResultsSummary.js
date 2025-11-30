export function ResultsSummary({ movies }) {
  return (
    <>
      <h2>Results of Your Search</h2>
      <div>
        <p>
          <span>📽️</span>
          <span>{movies.length}</span>
        </p>
      </div>
    </>
  );
}
