// This is a prototype. Do not use this code on a production website!

import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import * as ScrollMagic from "scrollmagic";
import gsap from 'gsap';
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
`;

const AnimationWrapper = styled.figure`
  overflow-x: hidden;
`;

const PartsList = styled.ul`
  position: absolute;
  left: 55vw;
  width: 20vw;
  top: 20vh;
  list-style: none;
  z-index: 10;
`;

const Part = styled.li`
  position: relative;
  margin-top: 2 em;
  font-size: 1.33em;
`;

const Lines = styled.ul`
  position: absolute;
  list-style: none;
  width: 20rem;
  height: 0.05rem;
  background: black;
  &:nth-child(1) {
    transform: translateY(-50%) rotate(45deg);
  }
`;

const IndexPage = () => {
  let heroTitle = useRef(null);
  let titleTwo = useRef(null);
  let wrapper = useRef(null);
  let list = useRef(null);
  let animationTarget = useRef(null);
  let phoneAnimation;

  useEffect(() => {
    phoneAnimation = lottie.loadAnimation({
      container: animationTarget,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animation 
    });

    const tl = gsap.timeline();
    tl.to(heroTitle, {opacity: 0, delay: 1})
    .to(wrapper, {background: '#C7E4FF'})
    .fromTo(animationTarget, {rotate: 20, scale: 1.6}, {rotate: 0, scale: 1, y: '-5%', onComplete: () => phoneAnimation.playSegments([0,11], true)})
    .fromTo(titleTwo, {opacity: 0}, {opacity: 1, y: '20%', delay: 1})
    .to(titleTwo, {opacity: 0})
    .to(animationTarget, {x: '-75%', y: '0', scale: 1.2, delay: 1, onComplete: () => phoneAnimation.playSegments([12,24], true)})
    .fromTo(list, {opacity: 0}, {opacity: 1, delay: 1})
  })
  
  const Animation = styled.div`
    width: ${props => props.w | 20}rem;
    position: absolute;
    left: ${props => props.x | 50}vw;
    top: ${props => props.y | 50}vh;
    transform: rotate(${props => props.rotation | 0}deg) translate(-50%, -50%);
    z-index: 0;
  `;  

  return (
    <Layout>
      <SEO/>
      <Intro ref={el => wrapper = el}>
        <Container>
        <HeroTitle ref={el => heroTitle = el}>Technology is kinda broken right now</HeroTitle>
        </Container>
        <Container>
        <TitleTwo color="black" ref={el => titleTwo = el}>But we can fix it!</TitleTwo>
        </Container>
        <PartsList ref={el => list = el}>
          <h1>Parts</h1>
          <Part>Dolor veritatis et unde. Vel sint quia magni adipisci. Corrupti laudantium quia rem sapiente laboriosam ut.</Part>
          <Part>Dolor veritatis et unde. Vel sint quia magni adipisci. Corrupti laudantium quia rem sapiente laboriosam ut.</Part>
          <Part>Dolor veritatis et unde. Vel sint quia magni adipisci. Corrupti laudantium quia rem sapiente laboriosam ut.</Part>
        </PartsList>
      </Intro>
      
      <AnimationWrapper>
        {/* BUG: when I have to add a ref to a self-made imported React element, the prop does not get passed through correctly */}
        <Animation ref={el => animationTarget = el}/>
      </AnimationWrapper>
      
      
    </Layout>
  )
}

export default IndexPage
