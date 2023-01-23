import React, { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import empty from '@assets/lottie-json/empty.json';
import { Container, Text } from './styles';

export const EmptyBox: React.FC = () => {
  const animationRef = useRef<Player>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <Container>
      <Text>Sem resultados!</Text>
      <Player src={empty} autoplay loop={true} ref={animationRef} className={'animation'} />
    </Container>
  );
};
