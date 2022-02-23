import React from 'react';
import RockPaperScissorsModel from '@models/RockPaperScissorsModel';
import RockImg from '@atoms/RockImg';
import PaperImg from '@atoms/PaperImg';
import ScissorsImg from '@atoms/ScissorsImg.jsx';

const EnemyRandomHand = ({ value }) => {
  if (value == RockPaperScissorsModel.ROCK) {
    return <RockImg />;
  }
  if (value == RockPaperScissorsModel.PAPER) {
    return <PaperImg />;
  }
  if (value == RockPaperScissorsModel.SCISSORS) {
    return <ScissorsImg />;
  }
};

export default EnemyRandomHand;
