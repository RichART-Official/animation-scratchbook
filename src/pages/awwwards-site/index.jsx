import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/globalStyle';

import Header from '../../components/awwwards-site/header';
import Container from '../../components/awwwards-site/container';
import ArrowBtn, {MinimalArrowBtn} from '../../components/awwwards-site/arrowBtn';
import {GenerateCases} from '../../components/awwwards-site/case';

import theme from '../../styles/theme';
import innerHeight from '../../library/innerHeight';

import caseStudies from '../../assets/data/posts';
import josefinSans from '../../assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf';
import josefinSansItalic from '../../assets/fonts/Josefin_Sans/JosefinSans-Italic-VariableFont_wght.ttf';


const {xs, sm} = theme.mediaQuery;
const {black, white, bgLight} = theme.colors;

const Layout = styled.div`
margin: 0;
padding: 0;
    @font-face {
        font-family: 'Josefin Sans';
        src: url(${josefinSans}), url(${josefinSansItalic});
    }
    * {
        font-family: 'Josefin Sans', sans-serif;
    }
    
`;

const Content = styled.main`
    display: flex;
    flex-direction: column;
    color: ${black};

`;

const Banner = styled.section`
    padding: 1em;
    height: 50vh;
    height: ${innerHeight(50)};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 15rem;
    background-color: ${white};
    ${xs} {
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

const Cases = ({children}) => {
    const Base = styled.section`
        height: 50vh;
        height: ${innerHeight(50)};
        display: flex;
        background: ${bgLight};
        flex-wrap: wrap;
        
    `;

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
    `;

    return (
        <Base>
            {children}
            <Navigation>
                <ArrowBtn disabled left/>
                <ArrowBtn/>
            </Navigation>
        </Base>
        
    );
}

const HeroTitle = styled.div`
    font-size: 1.66rem;
    font-weight: bold;
    line-height: 1.11em;
    color: ${white};
    mix-blend-mode: difference;
    @media ${xs} {
        font-size: 3.33rem;
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
        font-size: 1.33rem;
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



const BannerContainer = styled(Container)`
    margin-top: 2em;
    ${xs} {
        margin-top: 1.33em;
    }
    ${sm} {
        margin-top: 0;
    }
`;



const Index = () => {
    return (
        <Layout>
            <Header/>
            <Content>
                <Banner>
                    <BannerContainer>
                        <HeroTitle >
                            <span>Creating things is</span>
                        </HeroTitle>
                        <HeroTitle>
                            <span>what I do</span>
                        </HeroTitle>
                        <Button>
                            <span>More about me</span>
                            <MinimalArrowBtn />
                        </Button>
                    </BannerContainer>
                </Banner>
                <Cases innerHeight={innerHeight}>
                    <GenerateCases
                        posts={caseStudies}
                    />
                </Cases>
            </Content>
            
            <GlobalStyle/>
        </Layout>
    )
}

export default Index;