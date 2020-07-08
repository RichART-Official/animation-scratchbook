import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import * as ScrollMagic from "scrollmagic";
import Lottie from 'lottie-web-react';

import SEO from "../components/seo";
import Layout from "../layouts/defaultLayout";
import animation from "../assets/animations/eye-animation.json";

const Intro = styled.div`
  height: 100vh;
  background: navy;
  display: flex;
  align-items: center;
`

const Container = styled.div`
  width: 50rem;
  margin: 0 auto;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const HeroTitle = styled.h1`
  font-size: 5rem;
  color: ${props => props.color || "white"};
  text-align: center;
`

let animationObject = null;

const EyeAnimation = ({x, y, w}) => {
  const PositionedAnimation = styled(Lottie)`
    position: relative;
  `;
  return (
    <PositionedAnimation
      options={{
        renderer:  'svg',
        loop:  false,
        autoplay:  false,
        animationData:  animation,
      }}
      playingState={'play'}
      speed={1}
      direction={1}
    />
  )
};

const IndexPage = () => {
  return (
    <Layout>
      <SEO/>
      
      <Intro>
        <Container>
          <EyeAnimation/>
          <HeroTitle>We are being watched all the time</HeroTitle>
        </Container>
        
      </Intro>
    </Layout>
  )
}

export default IndexPage
