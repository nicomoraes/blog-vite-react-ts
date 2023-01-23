import { Player } from '@lottiefiles/react-lottie-player';
import loading from '@assets/lottie-json/loading.json';
import { Container } from './styles';

export const ArticleLoading = () => {
  return (
    <Container>
      <Player src={loading} autoplay loop={true} className={'animation'} />
    </Container>
  );
};
