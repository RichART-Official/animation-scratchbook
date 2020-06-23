import React, {useRef, useEffect, useState} from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import * as ScrollMagic from 'scrollmagic';

import SEO from "../components/seo";
import Layout from "../layouts/defaultLayout";
import animation from "../assets/video/animation.mp4"

const Intro = styled.div`
  height: 100vh;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroTitle = styled.h1`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: ${props => props.color || 'white'};
  text-align: center;
`;

const IndexPage = () => {
  // const [ scrollPos, setScrollPos ] = useState(0)

  let introSection = useRef(null);
  let videoElement = useRef(null);

  // Init ScrollMagic Controller
  const controller = new ScrollMagic.Controller();
  
  // ScrollMagic Scenes
  let scene = new ScrollMagic.Scene({
      duration: 11000,
      triggerHook: 0
    })
  useEffect(()=> {
    scene.triggerElement(introSection)
    .setPin(introSection)
    .addTo(controller);
  })

  // Video animation
  let scrollPos;
  let delay;
  const accelerationAmount = 0.1;
  scene.on('update', e => {
    scrollPos = e.scrollPos / 1000;
  })

  setInterval(() => {
    delay += (scrollPos - delay) * accelerationAmount;
    console.log(scrollPos, delay);
    // videoElement.currentTime = 5;
  }, 40)
  
  return (
    <Layout>
      <Intro ref={el => {introSection = el}}>
        <HeroTitle>Technology is broken</HeroTitle>
        <Video autoplay="true" src={animation} ref={el => {videoElement = el}}/>
      </Intro>
    </Layout>
  )
  
};



export default IndexPage
