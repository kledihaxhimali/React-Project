import { useEffect, useState } from "react";

export function SortResults({ movies, onSortChange }) {
  const [sortBy, setSortBy] = useState("input");
  const [sortedMovies, setSortedMovies] = useState(movies);
  useEffect(() => {
    if (sortBy === "input") {
      setSortedMovies(movies);
    } else if (sortBy === "releaseDate") {
      setSortedMovies(
        [...movies].sort((a, b) => Number(b.Year) - Number(a.Year))
      );
    }
  }, [movies, sortBy]);

  useEffect(() => {
    // Call the callback to update the sortedMovies in the parent component
    onSortChange(sortedMovies);
  }, [sortedMovies, onSortChange]);
  return (
    <select
      className="sort"
      value={sortBy}
      onChange={(e) => {
        setSortBy(e.target.value);
      }}
    >
      <option value="input">Sort by input</option>
      <option value="releaseDate">Sort by date</option>
    </select>
  );
}
