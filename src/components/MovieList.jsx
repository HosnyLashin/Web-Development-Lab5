import MovieItem from "./MovieItem.jsx";

function MovieList({ movies, onRemove, onUpdate }) {
  if (movies.length === 0) {
    return <p className="empty">Your list is empty. Add the first movie you watched.</p>;
  }

  return (
    <ul className="list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default MovieList;
