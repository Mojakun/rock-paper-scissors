import React from 'react';
import GameModel from '@models/GameModel';

const Result = ({ result }) => {
  if (result === GameModel.WIN) {
    return <div>勝ち</div>;
  }
  if (result === GameModel.LOSE) {
    return <div>負け</div>;
  }
  return <></>;
};

export default Result;
