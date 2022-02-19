import React, { useEffect } from "react";

function Filter({ movies, setFilteredMovies, activeGenre, setActiveGenre }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFilteredMovies(movies);
      return;
    }
    const filteredMovies = movies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFilteredMovies(filteredMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className={activeGenre === 12 ? "active" : ""}
        onClick={() => setActiveGenre(12)}
      >
        Adventure
      </button>
      <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
    </div>
  );
}

export default Filter;
