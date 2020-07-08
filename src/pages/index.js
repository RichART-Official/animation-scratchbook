import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import * as ScrollMagic from "scrollmagic";
import Lottie from 'lottie-web-react';
import lottie from 'lottie-web';

import SEO from "../components/seo";
import Layout from "../layouts/defaultLayout";
import animation from "../assets/animations/phone.json";

const Intro = styled.div`
  height: 100vh;
  background: #010157;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Container = styled.div`
  width: 100rem;
  padding: 3em;
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
  z-index: 10;
  position: absolute;
  max-width: 7em;
  top: 60vh;
  line-height: 1.33em;
`

const TitleTwo = styled(HeroTitle)`
  max-width: none;
  text-align: center;
  position: relative;
  top: none;
  visibility: hidden;
`;

const AnimationWrapper = styled.figure`
  overflow-x: hidden;
`;

const PartsList = styled.ul`
  position: absolute;
  left: 55vw;
  width: 20vw;
  top: 40vh;
  list-style: none;
  z-index: 10;
  visibility: hidden;
`;

const Part = styled.li`
  position: relative;
  margin-top: 3em;
`;

let animationObject = null;

const PhoneAnimation = ({x, y, w, rotation}) => {
  let animationTarget = useRef(null);

  const Animation = styled.div`
    width: ${props => props.w | 25}rem;
    position: absolute;
    left: ${props => props.x | 50}vw;
    top: ${props => props.y | 50}vh;
    transform: rotate(${props => props.rotation | 0}deg) translate(-50%, -50%);
    z-index: 0;
  `;

  useEffect(() => {
    lottie.loadAnimation({
      container: animationTarget,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animation 
    });
  });

  return (
    <Animation x={x} y={y} w={w} rotation={rotation} ref={el => animationTarget = el} />
  )
};

const IndexPage = () => {
  return (
    <Layout>
      <SEO/>
      <Intro>
        <Container>
        <HeroTitle>Technology is kinda broken right now</HeroTitle>
        </Container>
        <Container>
        <TitleTwo>But we can fix it!</TitleTwo>
        </Container>
        <PartsList>
          <Part>Dolor veritatis et unde. Vel sint quia magni adipisci. Corrupti laudantium quia rem sapiente laboriosam ut.</Part>
          <Part>Dolor veritatis et unde. Vel sint quia magni adipisci. Corrupti laudantium quia rem sapiente laboriosam ut.</Part>
          <Part>Dolor veritatis et unde. Vel sint quia magni adipisci. Corrupti laudantium quia rem sapiente laboriosam ut.</Part>
        </PartsList>
      </Intro>
      
      <AnimationWrapper>
        <PhoneAnimation rotation={30}/>
        <PhoneAnimation rotation={-20}/>
        <PhoneAnimation rotation={10}/>
        <PhoneAnimation rotation={45} />
      </AnimationWrapper>
      
      
    </Layout>
  )
}

export default IndexPage
