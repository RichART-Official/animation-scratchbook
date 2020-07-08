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
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const HeroTitle = styled.h1`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: ${props => props.color || "white"};
  text-align: center;
`

let animationObject = null;

const IndexPage = () => {
  return (
    <Layout>
      <SEO/>
      <Intro>
      <Lottie
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
      </Intro>
    </Layout>
  )
}

export default IndexPage
