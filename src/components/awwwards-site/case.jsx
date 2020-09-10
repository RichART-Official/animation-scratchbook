import React, {forwardRef} from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import theme from "../../styles/theme"
import ArrowBtn from "./arrowBtn"
import bg from "../../assets/images/richard-hotline.jpg"

const { xs, sm } = theme.mediaQuery
const { black, white, shadow, bgLight } = theme.colors

const Case = forwardRef(({ img, title, subtitle, url }, ref) => {
  const Base = styled(Link)`
    position: relative;
    height: 100vh;
    width: 100vw;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em;
    background-size: cover;
    background: ${black};
    color: ${white};
    cursor: pointer;
    text-decoration: none;
    flex-wrap: wrap;
    flex-grow: 1;
    overflow: hidden;
    @media ${sm} {
      width: 33vw;
      flex-basis: 33%;
      height: 50vh;
    }
    &:hover {
      img {
        opacity: 0.4;
      }
    }
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${black};
      z-index: 3;
      pointer-events: none;
      /*visibility: hidden;*/
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @media ${xs} {
        max-width: 75%;
      }
    }
  `

  const Title = styled.h3`
    margin-top: 0.66em;
    line-height: 1.33em;
    font-size: 1.33rem;
    z-index: 1;
    text-shadow: 0 0 1em ${shadow};
    font-weight: 600;
  `

  const Subtitle = styled.h5`
    font-size: 1.11rem;
    opacity: 0.88;
    line-height: 1.22em;
    z-index: 1;
    font-weight: normal;
  `

  const Img = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    opacity: 0.75;
    transition: 0.2s ease-in-out;
  `
  return (
    <Base ref={ref[1]} to={url}>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Img src={require(`../../assets/images/${img}`)} />
    </Base>
  )
})

const Wrapper = forwardRef(({ children }, ref) => {
  const Base = styled.section`
    height: 50vh;
    display: flex;
    background: ${bgLight};
    flex-wrap: wrap;
  `

  const Navigation = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 5;
    width: 100%;
    justify-content: space-between;
    padding: 2em;
    display: none;
    @media ${sm} {
      display: flex;
    }
  `

  return (
    <Base>
      {children}
      <Navigation ref={ref}>
        <ArrowBtn disabled left />
        <ArrowBtn />
      </Navigation>
    </Base>
  )
})

const Cases = forwardRef(({ posts }, ref) => (
  <Wrapper ref={ref[1]}>
    {posts.map(caseItem => (
      <Case
        key={caseItem.id}
        img={caseItem.img}
        title={caseItem.title}
        subtitle={caseItem.subtitle}
        url={caseItem.url}
        ref={ref[0]}
      />
    ))}
  </Wrapper>
))

export default Cases
export { Case }
