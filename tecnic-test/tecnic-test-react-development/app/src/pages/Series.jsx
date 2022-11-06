import React, { useState, useEffect } from 'react';
import CardStyled from '../ui/CardStyled';

const Series = () => {
  const [serieList, setSerieList] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const data = await fetch(
        'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      );
      const dataToJson = await data.json();
      const entries = dataToJson.entries;
      setSerieList(entries);
    };
    getShows();
  }, []);
  console.log(serieList);
  const serieType = [];
  for (let i = 0; i < serieList.length; i++) {
    const serie = serieList[i];
    if (serie.programType === 'series') {
      serieType.push(serie);
    }
  }
  console.log(serieType);

  return (
    <>
      {serieType.length &&
        serieType.map((serie) => (
          <CardStyled key={serie.title}>
            <img
              src={serie.images['Poster Art'].url}
              alt={serie.title}
              width="220"
              height="320"
            />
          </CardStyled>
        ))}
    </>
  );
};

export default Series;
