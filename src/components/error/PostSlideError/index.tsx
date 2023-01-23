import { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import sad_emoji from '@assets/lottie-json/sad-emoji.json';
import { SlideButton } from '@components/buttons/SlideButton';
import { Container } from './styles';

export const PostSlideError = () => {
  const emojiRef = useRef<Player>(null);

  useEffect(() => {
    setTimeout(() => {
      emojiRef.current?.pause();
    }, 700);
  }, []);

  return (
    <Container>
      <Player src={sad_emoji} ref={emojiRef} autoplay loop={true} className={'animation'} />
      <h3>Desculpe, não foi possível carregar os posts no momento.</h3>
      <SlideButton arrowDirection='right' />
      <SlideButton arrowDirection='left' />
    </Container>
  );
};
