import React from 'react';
import Card from './Card';

const CardList = ({ folks }) => {
  return (
    <div>
      {
        folks.map((user, i) => {
          return (
            <Card
              key={i}
              id={folks[i].id}
              name={folks[i].name}
              email={folks[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;