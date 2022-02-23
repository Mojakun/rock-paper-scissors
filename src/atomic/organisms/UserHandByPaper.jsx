import React from 'react';
import PaperImg from '@atoms/PaperImg';
const UserPaperHand = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <PaperImg />
    </div>
  );
};

export default UserPaperHand;
