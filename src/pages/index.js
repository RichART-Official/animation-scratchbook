import React, {useRef, useEffect} from "react";
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
  let introSection = useRef(null);

  // Init ScrollMagic Controller
  const controller = new ScrollMagic.Controller();
  let scene;

  // ScrollMagic Scenes
  useEffect(()=> {
    scene = new ScrollMagic.Scene({
      duration: 9000,
      triggerElement: introSection,
      triggerHook: 0
    })
    .setPin(introSection)
    .addTo(controller);
    
  })

  // Video Animation
  
  return (
    <Layout>
      <Intro ref={el => {introSection = el}}>
        <HeroTitle>Technology is broken</HeroTitle>
        <Video autoplay="true" src={animation} autoplay="true"/>
      </Intro>
    </Layout>
  )
  
};



export default IndexPage
