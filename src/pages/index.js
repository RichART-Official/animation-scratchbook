// This is a prototype. Do not use this code on a production website!

import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import * as ScrollMagic from "scrollmagic"
import gsap from "gsap"
import lottie from "lottie-web"

import SEO from "../components/seo"
import Layout from "../layouts/defaultLayout"
import animation from "../assets/animations/face.json"

const Slide = styled.section`
  height: 100vh;
  display: flex;
  margin: 2em;
  padding: 1em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const RocketAnimation = styled.div``

const IndexPage = () => {
  let rocketAnimation
  let introAnimationContainer = useRef(null)
  useEffect(() => {
    rocketAnimation = lottie.loadAnimation({
      container: introAnimationContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    })
  })
  return (
    <Layout>
      <SEO />
      <Slide>
        <RocketAnimation ref={el => (introAnimationContainer = el)} />
        <h1>My Animation Scratchbook</h1>
        <caption>
          Animation by Felipe Gasnier on Lottie Files because I had no time to
          animate something good myself :/
        </caption>
      </Slide>
    </Layout>
  )
}

export default IndexPage
