import React from "react"
import styled from "styled-components"
import {Link} from 'gatsby';

const NavBase = styled.nav`
  padding: 1em;
  width: 100%;
  position: absolute;
  z-index: 10;
  * {
    color: gray;
  }
`

const Nav = () => (
  <NavBase>
    <Link to='/'>
      <h3>Public Stack</h3>
    </Link>
  </NavBase>
)

export default Nav
