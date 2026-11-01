import { useState } from "react";

const MAX_STARS = 5;

function StarRating({ rating, onChange }) {
  const [hover, setHover] = useState(0);
  const shown = hover || rating;

  return (
    <div className="star-rating" onMouseLeave={() => setHover(0)}>
      {Array.from({ length: MAX_STARS }, (_, index) => {
        const value = index + 1;
        return (
          <button
            type="button"
            key={value}
            className={value <= shown ? "star on" : "star"}
            onClick={() => onChange(value === rating ? 0 : value)}
            onMouseEnter={() => setHover(value)}
            aria-label={`${value} star${value > 1 ? "s" : ""}`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;
