import React, { useEffect, useState, useCallback } from 'react';
import Container from '@templates/Container';
import EnemyRandomHand from '@organisms/EnemyRandomHand';
import UserScissorsHand from '@organisms/UserScissorsHand';
import UserRockHand from '@organisms/UserRockHand';
import UserPaperHand from '@organisms/UserPaperHand';
import RockPaerScissorsModel from '@models/RockPaerScissorsModel';
import GameModel from '@models/GameModel';
import Result from '@organisms/Result';
const Home = () => {
  const [userValue, setUserValue] = useState(1);
  const [enemyValue, setEnemyValue] = useState(2);
  const [result, setResult] = useState(0);

  const onClickRockHand = useCallback(() => {
    setResult(RockPaerScissorsModel.judgementByRock(enemyValue));
  });
  const onClickPaerHand = useCallback(() => {
    setResult(RockPaerScissorsModel.judgementByPaper(enemyValue));
  });
  const onClickScissorsHand = useCallback(() => {
    setResult(RockPaerScissorsModel.judgementByScissors(enemyValue));
  });

  return (
    <Container>
      <Result result={result} />
      <EnemyRandomHand value={enemyValue} />
      <UserRockHand onClick={onClickRockHand} />
      <UserPaperHand onClick={onClickPaerHand} />
      <UserScissorsHand onClick={onClickScissorsHand} />
    </Container>
  );
};

export default Home;
