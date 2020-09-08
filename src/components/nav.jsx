import React from "react"
import styled from "styled-components"
import {Link} from 'gatsby';

const NavBase = styled.nav`
  padding: 1em;
  width: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  * {
    color: gray;
    margin: 0;
    padding: 0.33em;
    display: inline;
  }
`

const Nav = () => (
  <NavBase>
    <Link to='/'>
      <h3>Animation Scratchbook</h3>
    </Link>
    <div>
    <Link to='/'>
      <p>Home</p>
    </Link>
    <Link to='/plane'>
      <p>Plane</p>
    </Link>
    <Link to='/phone'>
      <p>Phone</p>
    </Link>
    <Link to='/awwwards-site/'>
      <p>Agency</p>
    </Link>
    </div>
  </NavBase>
)

export default Nav
