import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/globalStyle';
import theme from '../../styles/theme';

import Header from '../../components/awwwards-site/header';
import Container from '../../components/awwwards-site/container';

import josefinSans from '../../assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf';
import josefinSansItalic from '../../assets/fonts/Josefin_Sans/JosefinSans-Italic-VariableFont_wght.ttf';

import rightArrow from '../../assets/vectors/arrow-right.svg';

const {xs} = theme.mediaQuery;

const Layout = styled.div`
margin: 0;
padding: 0;
    @font-face {
        font-family: 'Josefin Sans';
        src: url(${josefinSans}), url(${josefinSansItalic});
    }
    * {
        font-family: 'Josefin Sans', sans-serif;
        transition: 0.3s ease-in-out;
    }
    
`;

const Content = styled.main`
    display: flex;
    flex-direction: column;
    @media ${xs} {
        display: grid;
    }
    grid-template-rows: 50vh 50vh;
    align-items: center;
`;

const Banner = styled(Container)`
    height: 50vh;
    @media ${xs} {
        height: none;
    }
`;

const Cases = styled.section`
`;

const HeroTitle = styled.div`
    font-size: 2.66rem;
    font-weight: bold;
    @media ${xs} {
        font-size: 5rem;
    }
`;

const Button = styled.a`
    display: flex;
    justify-items: center;
    align-items: center;
    margin: 1em;
    font-size: 1rem;
    @media ${xs} {
        font-size: 1.33rem;
    }
    img {
        border: 0.01em solid black;
        border-radius: 1000px;
        padding: 0.66em;
        margin-left: 1em;
    }
`;


const Index = () => (
    <Layout>
        <Header/>
        <Content>
            <Banner>
                <HeroTitle>
                    <span>Creating unique brand is</span>
                </HeroTitle>
                <HeroTitle>
                    <span>What we do</span>
                </HeroTitle>
                <Button>
                    <span>More about us</span>
                    <img src={rightArrow} />
                </Button>
            </Banner>
            <Cases>

            </Cases>
        </Content>
        
        <GlobalStyle/>
    </Layout>
)

export default Index;