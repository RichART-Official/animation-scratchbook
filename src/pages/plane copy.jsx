// This is a prototype. Do not use this code on a production website!

import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import * as ScrollMagic from "scrollmagic"
import gsap, { Power1 } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import lottie from "lottie-web"

import SEO from "../components/seo"
import Layout from "../layouts/defaultLayout"
import animation from "../assets/animations/phone.json"

const paper = require("../assets/images/paper.png")
const cloud = require("../assets/vectors/cloud.svg")

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

const Header = styled.header`
  height: 100vh;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  overflow: hidden;
`

const Container = styled.div`
  width: 100rem;
  padding: 3em;
  margin: 0 auto;
  overflow: hidden;
  padding: 5vh 0;
`

const PlaneImg = styled.img`
  height: 30vh;
  position: absolute;
  left: 0;
  overflow: hidden;
  z-index: 2;
`

const CloudImg = styled.img`
  width: 20rem;
  height: auto;
  z-index: 0;
  position: absolute;
  top: ${props => props.y}vh;
  left: ${props => props.x}vw;
  opacity: 0.6;
`

const HeroText = styled.h1`
  font-size: 100vw;
  line-height: 1em;
  color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
`

const Plane = () => {
  let plane = useRef(null)
  let wrapper = useRef(null)
  let text = useRef(null)

  const flightPath = {
    curviness: 2,
    autoRotate: true,
    path: [
      { x: 750, y: 300 },
      { x: 1000, y: -300 },
      { x: 3000, y: 0 },
    ],
  }

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(plane, {
      scrollTrigger: {
        trigger: wrapper,
        start: "10px top",
        toggleActions: "play none reverse reset",
        markers: true,
        scrub: 0.5,
        pin: wrapper,
      },
      motionPath: flightPath,
      opacity: 1,
      duration: 5,
      ease: Power1.easeInOut,
    })
  })

  const generateClouds = () => {
    let clouds = []
    const randomPos = () => Math.floor(Math.random() * 100 + 1)
    for (let i = 0; i <= 5; i++) {
      clouds.push(<CloudImg src={cloud} x={randomPos()} y={randomPos()} />)
    }
    return clouds
  }

  return (
    <Layout>
      <SEO />
      <Container>
        <h1>Paper Plane Test</h1>
      </Container>
      <Header ref={el => (wrapper = el)}>
        <PlaneImg ref={el => (plane = el)} src={paper} alt="Plane" />
        {generateClouds()}
        <HeroText ref={el => (text = el)}>Swoosh</HeroText>
      </Header>
      <Container>
        <h2>Whooooooo!</h2>
        <p>Made using GSAP and scrollTrigger</p>
      </Container>
    </Layout>
  )
}

export default Plane
