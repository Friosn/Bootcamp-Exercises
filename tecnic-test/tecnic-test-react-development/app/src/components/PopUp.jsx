import React from 'react';
import PopUp from 'reactjs-popup';

import PopUpStyled from '../ui/PopUpStyle';
import CardDetail from './CardDetail';

const PopUpCard = ({ title, description, releaseYear, image }) => {
  return (
    <PopUp trigger={<p>{title}</p>} modal nested>
      {(close) => (
        <PopUpStyled>
          <button className="closeDiv" onClick={close}>
            <strong>X</strong>
          </button>
          <div className="contentPop">
            <CardDetail
              title={title}
              description={description}
              releaseYear={releaseYear}
              image={image}
            />
          </div>
        </PopUpStyled>
      )}
    </PopUp>
  );
};
export default PopUpCard;
