import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/globalStyle';
import theme from '../../styles/theme';

import Header from '../../components/awwwards-site/header';
import Container from '../../components/awwwards-site/container';
import josefinSans from '../../assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf';
import josefinSansItalic from '../../assets/fonts/Josefin_Sans/JosefinSans-Italic-VariableFont_wght.ttf';

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

const Index = () => (
    <Layout>
        <Header/>
        <main>
            <Container>
                <h1>Hello world</h1>
            </Container>
        </main>
        
        <GlobalStyle/>
    </Layout>
)

export default Index;