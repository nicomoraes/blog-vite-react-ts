import { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import sad_emoji from '@assets/lottie-json/sad-emoji.json';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import { Container } from './styles';

export const PostPageError = () => {
  const emojiRef = useRef<Player>(null);
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    setOrigin(window.location.origin);
    setTimeout(() => {
      emojiRef.current?.pause();
    }, 700);
  }, []);

  return (
    <Container>
      <Player src={sad_emoji} ref={emojiRef} autoplay loop={false} className={'animation'} />
      <h3>Desculpe, não foi possível carregar o post no momento.</h3>
      <a href={`${origin}/explorer`}>
        <PrimaryButton text='Explorer' />
      </a>
    </Container>
  );
};
