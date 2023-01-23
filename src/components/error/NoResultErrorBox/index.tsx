import { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import error from '@assets/lottie-json/error.json';
import { Container, Label, Message } from './styles';

interface Props {
  info: string;
  message: string;
}

export const NoResultErrorBox = ({ info, message }: Props) => {
  const errorSVGRef = useRef<Player>(null);

  useEffect(() => {
    setTimeout(() => {
      errorSVGRef.current?.pause();
    }, 400);
  }, []);

  return (
    <Container>
      <Player src={error} autoplay loop={false} ref={errorSVGRef} className={'animation'} />
      <Label>{info}</Label>
      <Message>{message}</Message>
    </Container>
  );
};
