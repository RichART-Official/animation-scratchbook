import React from 'react';
import styled from 'styled-components';
import Container from './container';
import {Link} from 'gatsby';

import theme from '../../styles/theme';

const {xs} = theme.mediaQuery;

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
    color: black;
    font-weight: 700;
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    width: 100%;
    position: relative;
    @media ${xs} {
        padding: 2em 0;
    }
`;

const HamburgerBtn = styled.div`
    width: 1.33rem;
    @media ${xs} {
        width: 1.66rem;
    }
    span {
        margin-bottom: 0.33rem;
        background: black;
        height: 0.066rem;
        width: 100%;
        display: block;
    }
`;

const Header = () => (
    <Container>
        <HeaderWrapper className="fixed">
            <Logo>Agency</Logo>
            <HamburgerBtn>
                <span/>
                <span/>
            </HamburgerBtn>
        </HeaderWrapper>
    </Container>
        
);

export default Header;