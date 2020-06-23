import React from 'react';
import styled from 'styled-components'

const NavBase = styled.nav`
    padding: 0.33em;
    width: 100%;
`;

const Nav = () => (
    <NavBase>
        <h3>Public Stack</h3>
    </NavBase>
);

export default Nav;