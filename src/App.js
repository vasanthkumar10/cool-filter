import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1832e7ffb1687851d4d955701381415c&language=en-US"
    );
    const moviesData = await data.json();
    setMovies(moviesData.results);
    setFilteredMovies(moviesData.results);
  };

  return (
    <div className="App">
      <Filter
        movies={movies}
        setFilteredMovies={setFilteredMovies}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="movies">
        <AnimatePresence>
          {filteredMovies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
