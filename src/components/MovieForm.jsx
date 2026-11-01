import { useState } from "react";
import StarRating from "./StarRating.jsx";

function MovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) {
      setError("Please enter a movie title.");
      return;
    }
    if (rating === 0) {
      setError("Please choose a star rating.");
      return;
    }
    onAdd({ title: trimmed, review: review.trim(), rating });
    setTitle("");
    setReview("");
    setRating(0);
    setError("");
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        placeholder="Write a short review (optional)"
        rows={3}
        value={review}
        onChange={(event) => setReview(event.target.value)}
      />
      <div className="form-row">
        <StarRating rating={rating} onChange={setRating} />
        <button type="submit" className="primary">
          Add movie
        </button>
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default MovieForm;
