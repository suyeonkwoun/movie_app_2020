import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const {
      location: { state },
    } = this.props;

    if (state) {
      return (
        <div className="detail_container">
          <div className="detail_movie">
            <div className="detail_movie_poster">
              <img src={state.poster} alt={state.title}></img>
            </div>
            <div className="detail_movie_data">
              <h2 className="detail_movie_title">{state.title}</h2>
              <h4 className="detail_movie_year">{state.year} </h4>
              <ul className="detail_movie_genres">
                {state.genres.map((genre, index) => (
                  <li className="detail_movie_genres_genre" key={index}>
                    {genre}
                  </li>
                ))}
              </ul>
              <span className="detail_movie_summary">{state.summary}</span>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
