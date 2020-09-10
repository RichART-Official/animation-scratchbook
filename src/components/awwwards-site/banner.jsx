import React, {forwardRef} from 'react';
import styled from 'styled-components';
import Container from './container';
import {MinimalArrowBtn} from '../../components/awwwards-site/arrowBtn';
import theme from '../../styles/theme';
const {xs, sm} = theme.mediaQuery;
const {black, white} = theme.colors;

const HeroTitle = forwardRef(({children}, ref) => {
    const Base = styled.h1`
    font-size: 1.66rem;
    font-weight: bold;
    line-height: 1.11em;
    color: ${white};
    mix-blend-mode: difference;
    z-index: 2;
    @media ${xs} {
        font-size: 2.66rem;
    }
`;
    return (
        <Base>
            <span ref={ref}>
                {children}
            </span>
        </Base>
    )
})

const Overlay = forwardRef((props, ref) => {
    const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        pointer-events: none;
    `;

    const Pane = styled.span`
        background-color: ${props => props.color || black};
        height: 100%;
        width: 100%;
        flex-basis: 100%;
        display: block;
        @media ${sm} {
            width: 33.33%;
            flex-basis: 33.33%
        }
    `;
    return (
        <Wrapper ref={ref}>
            <Pane/>
            <Pane/>
            <Pane/>
        </Wrapper>
    )
})

const Banner = forwardRef((props, ref) => {
const Wrapper = styled.section`
    padding: 1em;
    height: 50vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 15rem;
    background-color: ${white};
    @media ${xs} {
        padding: 0em;
    }
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${black};
        visibility: hidden;
    }
`;

const StyledContainer = styled(Container)`
    margin-top: 2em;
    ${xs} {
        margin-top: 1.33em;
    }
    ${sm} {
        margin-top: 0;
    }
`;

const Button = styled.a`
    display: flex;
    justify-items: center;
    align-items: center;
    margin: 1em 0.33em;
    font-size: 1rem;
    cursor: pointer;
    @media ${xs} {
        font-size: 1.11rem;
    }
    &:hover {
        svg {
            background: ${black};
            line, polyline {
                stroke: ${white};
            }
        }
    }
`;



    return (
        <Wrapper>
            <StyledContainer >
                <Overlay ref={ref[1]}/> 
                <span ref={ref[0]}>
                    <HeroTitle>Creating things is</HeroTitle>
                    <HeroTitle>what I do</HeroTitle>
                </span>
                <Button>
                <span>More about me</span>
                <MinimalArrowBtn />
                </Button>
            </StyledContainer>
        </Wrapper>
    )
});

export default Banner;