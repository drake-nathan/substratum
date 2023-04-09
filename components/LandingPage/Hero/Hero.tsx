import * as St from './Hero.styled';

interface Props {
  width: number;
}

const Hero = ({ width }: Props): JSX.Element => (
  <St.Container width={width}>
    <St.Title>sub·stra·tum</St.Title>
    <St.Subtitle>noun</St.Subtitle>
    <St.Line />

    <St.List>
      <St.ListItem>
        <St.ListText>An underlying layer or substance</St.ListText>
      </St.ListItem>

      <St.ListItem>
        <St.ListText>A foundation or basis of something</St.ListText>
      </St.ListItem>
    </St.List>

    <St.Subtle>
      Substratum is a platform built from the ground up to support dynamic and
      experimental crypto art projects.
    </St.Subtle>

    <St.Subtle>(It works great for regular projects, too.)</St.Subtle>
  </St.Container>
);

export default Hero;
