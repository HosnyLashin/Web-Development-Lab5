import { useState } from "react";
import StarRating from "./StarRating.jsx";

function MovieItem({ movie, onRemove, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(movie.review);

  function saveReview() {
    onUpdate(movie.id, { review: draft.trim() });
    setEditing(false);
  }

  function cancelEdit() {
    setDraft(movie.review);
    setEditing(false);
  }

  return (
    <li className="card movie">
      <div className="movie-header">
        <h2>{movie.title}</h2>
        <button
          type="button"
          className="remove"
          onClick={() => onRemove(movie.id)}
          aria-label={`Remove ${movie.title}`}
        >
          ✕
        </button>
      </div>

      <div className="stars-shown" aria-label={`${movie.rating} out of 5 stars`}>
        {movie.rating > 0 ? "⭐".repeat(movie.rating) : "No rating"}
        <span className="stars-count">
          {movie.rating} / 5
        </span>
      </div>

      <StarRating
        rating={movie.rating}
        onChange={(value) => onUpdate(movie.id, { rating: value })}
      />

      {editing ? (
        <div className="review-edit">
          <textarea
            rows={3}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
          />
          <div className="review-actions">
            <button type="button" className="primary" onClick={saveReview}>
              Save
            </button>
            <button type="button" className="ghost" onClick={cancelEdit}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="review">
          <p>{movie.review || "No review yet."}</p>
          <button type="button" className="ghost" onClick={() => setEditing(true)}>
            {movie.review ? "Edit review" : "Add review"}
          </button>
        </div>
      )}
    </li>
  );
}

export default MovieItem;
