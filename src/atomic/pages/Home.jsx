import React, { useEffect, useState, useCallback } from 'react';
import GridContainer from '@templates/GridContainer';
import EnemyRandomHand from '@organisms/EnemyRandomHand';
import UserHandByScissors from '@organisms/UserHandByScissors';
import UserHandByRock from '@organisms/UserHandByRock';
import UserHandByPaper from '@organisms/UserHandByPaper';
import RockPaerScissorsModel from '@models/RockPaerScissorsModel';
import GameModel from '@models/GameModel';
import Result from '@organisms/Result';
const Home = () => {
  const [userValue, setUserValue] = useState(1);
  const [enemyValue, setEnemyValue] = useState(2);
  const [result, setResult] = useState(0);

  const onClickRockHand = useCallback(() => {
    console.log('hakka');
    setResult(RockPaerScissorsModel.judgementByRock(enemyValue));
  });
  const onClickPaerHand = useCallback(() => {
    setResult(RockPaerScissorsModel.judgementByPaper(enemyValue));
  });
  const onClickScissorsHand = useCallback(() => {
    setResult(RockPaerScissorsModel.judgementByScissors(enemyValue));
  });

  return (
    <GridContainer>
      <Result result={result} />
      <EnemyRandomHand value={enemyValue} />
      <UserHandByRock onClick={onClickRockHand} />
      <UserHandByPaper onClick={onClickPaerHand} />
      <UserHandByScissors onClick={onClickScissorsHand} />
    </GridContainer>
  );
};

export default Home;
