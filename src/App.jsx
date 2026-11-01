import { useState } from "react";
import MovieForm from "./components/MovieForm.jsx";
import MovieList from "./components/MovieList.jsx";

function App() {
  const [movies, setMovies] = useState([]);

  function addMovie(movie) {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  }

  function removeMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  function updateMovie(id, changes) {
    setMovies(
      movies.map((movie) => (movie.id === id ? { ...movie, ...changes } : movie))
    );
  }

  const totalStars = movies.reduce((sum, movie) => sum + movie.rating, 0);

  return (
    <div className="app">
      <h1>🎬 Movies Watch List</h1>
      <MovieForm onAdd={addMovie} />
      {movies.length > 0 && (
        <p className="summary">
          {movies.length} {movies.length === 1 ? "movie" : "movies"} watched ·{" "}
          {totalStars} ⭐ given in total
        </p>
      )}
      <MovieList movies={movies} onRemove={removeMovie} onUpdate={updateMovie} />
    </div>
  );
}

export default App;
