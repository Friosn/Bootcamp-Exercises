import React, { useEffect, useState } from 'react';

import PopUpCard from '../components/PopUp';
import CardStyled from '../ui/CardStyled';

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
      {movieType.length &&
        movieType.map((movie) => (
          <CardStyled key={movie.title}>
            <img
              src={movie.images['Poster Art'].url}
              alt={movie.title}
              height="320"
              width="220"
            />
            <PopUpCard
              title={movie.title}
              description={movie.description}
              image={movie.images['Poster Art'].url}
            />
          </CardStyled>
        ))}
    </>
  );
};

export default Movies;
