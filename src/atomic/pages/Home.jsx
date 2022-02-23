import React, { useEffect, useState, useCallback } from 'react';
import GridContainer from '@templates/GridContainer';
import EnemyRandomHand from '@organisms/EnemyRandomHand';
import UserHandByScissors from '@organisms/UserHandByScissors';
import UserHandByRock from '@organisms/UserHandByRock';
import UserHandByPaper from '@organisms/UserHandByPaper';
import RockPaperScissorsModel from '@models/RockPaperScissorsModel';
import GameModel from '@models/GameModel';
import Result from '@organisms/Result';
const Home = () => {
  const [userValue, setUserValue] = useState(0);
  const [enemyValue, setEnemyValue] = useState(2);
  const [result, setResult] = useState(0);

  const gameStart = () => {
    setUserValue(0);
  };

  const onClickRockHand = useCallback(() => {
    if (userValue) {
      gameStart();
      return;
    }
    setUserValue(RockPaperScissorsModel.ROCK);
    setResult(RockPaperScissorsModel.judgementByRock(enemyValue));
  });
  const onClickPaperHand = useCallback(() => {
    if (userValue) {
      gameStart();
      return;
    }
    setUserValue(RockPaperScissorsModel.PAPER);
    setResult(RockPaperScissorsModel.judgementByPaper(enemyValue));
  });
  const onClickScissorsHand = useCallback(() => {
    if (userValue) {
      gameStart();
      return;
    }
    setUserValue(RockPaperScissorsModel.SCISSORS);
    setResult(RockPaperScissorsModel.judgementByScissors(enemyValue));
  });

  useEffect(() => {
    if (userValue) return;
    const intervalId = setInterval(() => {
      setEnemyValue(RockPaperScissorsModel.enemyRandomHand());
    }, 10);
    return () => clearInterval(intervalId);
  }, [userValue]);

  return (
    <GridContainer>
      <Result result={result} />
      <EnemyRandomHand value={enemyValue} />
      <UserHandByRock onClick={onClickRockHand} />
      <UserHandByScissors onClick={onClickScissorsHand} />
      <UserHandByPaper onClick={onClickPaperHand} />
      <button onClick={gameStart}>start</button>
    </GridContainer>
  );
};

export default Home;
