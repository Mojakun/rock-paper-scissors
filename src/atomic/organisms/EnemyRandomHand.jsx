import React from 'react';
import RockPaerScissorsModel from '@models/RockPaerScissorsModel';
const EnemyRandomHand = ({ value }) => {
  if (value == RockPaerScissorsModel.ROCK) {
    return <div>ROCK</div>;
  }
  if (value == RockPaerScissorsModel.PAPER) {
    return <div>PAER</div>;
  }
  if (value == RockPaerScissorsModel.SCISSORS) {
    return <div>SCISSORS</div>;
  }
};

export default EnemyRandomHand;
