import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const data = await fetch(
        `https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json`,
      );
      const dataToJson = await data.json();
      const array = dataToJson.entries;
      setMovieList(array);
    };

    getShows();
  }, []);

  const serieType = [];
  const movieType = [];
  for (let i = 0; i < movieList.length; i++) {
    const show = movieList[i];
    if (show.programType === 'movie') {
      movieType.push(show);
    } else {
      serieType.push(show);
    }
  }

  return (
    <>
      <div className="movieGallery">
        {movieType.length &&
          movieType.map((movie) => (
            <div key={movie.title}>
              <h3>{movie.title}</h3>
              <img src={movie.images['Poster Art'].url} alt={movie.title} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Movies;
