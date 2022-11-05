import React, { useState, useEffect } from 'react';

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
    <div>
      {serieType.length &&
        serieType.map((serie) => (
          <div key={serie.title}>
            <h3>{serie.title}</h3>
            <img
              src={serie.images['Poster Art'].url}
              alt={serie.title}
              width="1000"
              height="1500"
            />
          </div>
        ))}
    </div>
  );
};

export default Series;
