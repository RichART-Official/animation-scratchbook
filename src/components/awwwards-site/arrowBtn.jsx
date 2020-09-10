import React from "react"
import styled from "styled-components"

import theme from "../../styles/theme"
import RightArrow from "../../assets/vectors/arrow-right.svg"

const { black, white, transparentWhite, transparentBlack } = theme.colors

const MinimalArrowBtn = styled(RightArrow)`
  transition: 0.1s ease-in-out;
  width: 2.33em;
  height: 2.33em;
  padding: 0.66em;
  margin-left: 0.66em;
  border: solid ${black} 0.01em;
  border-radius: 5em;
  &:hover {
    background: ${black};
    line,
    polyline {
      stroke: ${white};
    }
  }
`

const ArrowBtn = styled(RightArrow)`
  transition: 0.1s ease-in-out;
  width: 3em;
  height: 3em;
  padding: 0.88em;
  margin-left: 0.66em;
  border-radius: 5em;
  transform: ${props => (props.left ? "rotate(180deg)" : "none")};
  background: ${transparentWhite};
  stroke: ${white};
  opacity: ${props => (props.disabled ? "0.33" : "1")};
  cursor: ${props => (props.disabled ? "normal" : "pointer")};
  line,
  polyline {
    stroke: ${white};
  }
`

export default ArrowBtn
export { MinimalArrowBtn }
