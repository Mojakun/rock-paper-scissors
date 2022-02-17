import React, { useEffect, useState, useCallback } from 'react';
import Container from '@templates/Container';
import EnemyRandomHand from '@organisms/EnemyRandomHand';
import UserScissorsHand from '@organisms/UserScissorsHand';
import UserRockHand from '@organisms/UserRockHand';
import UserPaperHand from '@organisms/UserPaperHand';
const Home = () => {
  const [enemyValue, setEnemyValue] = useState(1);

  return (
    <Container>
      <div>
        <EnemyRandomHand value={enemyValue} />
      </div>
      <div>
        <UserRockHand />
        <UserPaperHand />
        <UserScissorsHand />
      </div>
    </Container>
  );
};

export default Home;
