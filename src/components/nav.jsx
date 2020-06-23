import React from 'react';
import styled from 'styled-components'

const NavBase = styled.nav`
    padding: 1em;
    width: 100%;
    position: absolute;
`;

const Nav = () => (
    <NavBase>
        <h3>Public Stack</h3>
    </NavBase>
);

export default Nav;