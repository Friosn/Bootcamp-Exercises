export const getShows = async () => {
  const data = await fetch(
    `https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json`,
  );
  const dataToJson = await data.json();
  return dataToJson;
};
