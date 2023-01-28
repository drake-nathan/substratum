import React from 'react';
import { poppins } from 'styles/fonts';
import * as St from './Hero.styled';

const Hero = (): JSX.Element => {
  return (
    <St.Container>
      <St.Title className={poppins.className}>sub·stra·tum</St.Title>
      <St.Subtitle className={poppins.className}>noun</St.Subtitle>

      <St.List>
        <St.ListItem>
          <St.ListText>an underlying layer or substance</St.ListText>
        </St.ListItem>

        <St.ListItem>
          <St.ListText>a foundation or basis of something</St.ListText>
        </St.ListItem>
      </St.List>

      <St.Subtle>
        Substratum is a platform built from the ground up to support dynamic and
        experimental crypto art projects.
      </St.Subtle>

      <St.Subtle>(It works great for regular projects, too.)</St.Subtle>
    </St.Container>
  );
};

export default Hero;
