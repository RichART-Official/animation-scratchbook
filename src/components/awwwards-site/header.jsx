import React from 'react';
import styled from 'styled-components';
import Container from './container';
import {Link} from 'gatsby';

import theme from '../../styles/theme';

const {xs} = theme.mediaQuery;
const {black, white, bgLight} = theme.colors;

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    letter-spacing: 0.22em;
    color: ${black};
    font-weight: 700;
`;

const HeaderBase = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
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
        background: ${black};
        height: 0.066rem;
        width: 100%;
        display: block;
    }
`;

const HeaderWrapper = styled.header`
    position: fixed;
    width: 100%;
    z-index: 10;
    cursor: pointer;
`;

const Header = () => (
    <HeaderWrapper>
        <HeaderBase>
            <Logo>Richard.</Logo>
            <HamburgerBtn>
                <span/>
                <span/>
            </HamburgerBtn>
        </HeaderBase>
    </HeaderWrapper>
    

        
);

export default Header;