import { Container, StackBox, TechDescription } from './styles';
import { SiNodedotjs, SiReact, SiTypescript } from 'react-icons/si';

const TypescriptBox = () => {
  return (
    <Container>
      <SiTypescript size={30} color={'#007acc'} />
      <TechDescription>Typescript</TechDescription>
    </Container>
  );
};

const ReactBox = () => {
  return (
    <Container>
      <SiReact size={30} color={'#61dafb'} />
      <TechDescription>React.js</TechDescription>
    </Container>
  );
};

const NodeBox = () => {
  return (
    <Container>
      <SiNodedotjs size={30} color={'#80bd41'} />
      <TechDescription>Node.js</TechDescription>
    </Container>
  );
};

export const HomeStackComponents = () => {
  return (
    <StackBox>
      <TypescriptBox />
      <ReactBox />
      <NodeBox />
    </StackBox>
  );
};
