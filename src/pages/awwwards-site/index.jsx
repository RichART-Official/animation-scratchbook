import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import GlobalStyle from "../../styles/globalStyle"
import gsap from "gsap"
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

import Header from "../../components/awwwards-site/header"
import Banner from "../../components/awwwards-site/banner"
import Cases from "../../components/awwwards-site/case"

import theme from "../../styles/theme"
import caseStudies from "../../assets/data/posts"

import josefinSans from "../../assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf"
import josefinSansItalic from "../../assets/fonts/Josefin_Sans/JosefinSans-Italic-VariableFont_wght.ttf"

const { black } = theme.colors

const Layout = styled.div`
  margin: 0;
  padding: 0;
  @font-face {
    font-family: "Josefin Sans";
    src: url(${josefinSans}), url(${josefinSansItalic});
  }
  * {
    font-family: "Josefin Sans", sans-serif;
  }
`
gsap.registerPlugin(CSSRulePlugin);

const Content = styled.main`
  display: flex;
  flex-direction: column;
  color: ${black};
`

const Index = () => {
    const titleRef = useRef(null);
    const overlayRef = useRef(null);
    const casesRef = useRef(null);
    const navRef = useRef(null);

    const tl = gsap.timeline();
    useEffect(() => {
        let rule = CSSRulePlugin.getRule(`${casesRef}:before`);
        tl.from(titleRef.current.children, 1, {
            y: 100,
            ease: "power4.out",
            opacity: 0, 
            delay: 1.5,
            skewY: 3,
            stagger: {
                amount: 0.5
            }
        })
        .to(overlayRef.current.children, 1, {
            y: '-100%',
            ease: "power4.out",
            delay: 0.5,
            stagger: {
                amount: 1.2
            }
        })
        .from(navRef.current.children, 1, {
            opacity: 0
        })

        console.log(titleRef, overlayRef, navRef, rule);

    })
  return (
    <Layout>
      <Header />
      <Content>
        <Banner 
            ref={[titleRef, overlayRef]}
        />
        <Cases 
            ref={[casesRef, navRef]}
            posts={caseStudies} 
        />
      </Content>
      <GlobalStyle />
    </Layout>
  )
}

export default Index;
