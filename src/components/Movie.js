import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: { year, title, summary, poster, genres },
      }}
    >
      <div className="movie">
        <div className="movie_poster">
          <img src={poster} alt={title} className="movie_img"></img>
        </div>
        <div className="movie_data">
          <h2 className="movie_title">{title}</h2>
          <h4 className="movie_year">{year} </h4>
          <ul className="movie_genres">
            {genres.map((genre, index) => (
              <li className="movie_genres_genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
          <span className="movie_summary">{summary}</span>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
