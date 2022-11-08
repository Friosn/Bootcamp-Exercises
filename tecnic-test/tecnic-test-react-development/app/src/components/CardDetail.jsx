import React from 'react';

const CardDetail = ({ className, title, releaseYear, description, image }) => {
  return (
    <figure className={className}>
      <h2>{title}</h2>
      <h3>{releaseYear}</h3>
      <h3>{description}</h3>
      <img src={image} alt={title} />
    </figure>
  );
};

export default CardDetail;
