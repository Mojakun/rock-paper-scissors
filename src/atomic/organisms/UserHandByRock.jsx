import React from 'react';
import RockImg from '@atoms/RockImg';

const UserRockHand = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <RockImg />
    </div>
  );
};

export default UserRockHand;
