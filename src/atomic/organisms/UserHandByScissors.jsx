import React from 'react';
import ScissorsImg from '@atoms/ScissorsImg';

const UserScissorsHand = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <ScissorsImg />
    </div>
  );
};

export default UserScissorsHand;
