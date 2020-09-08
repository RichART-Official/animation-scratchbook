import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../../styles/theme';

import bg from '../../assets/images/richard-hotline.jpg'

const {xs, sm} = theme.mediaQuery;
const {black, white, shadow} = theme.colors;

const Case = ({img, title, subtitle, url}) => {
    const Base = styled(Link)`
        position: relative;
        height: 100vh;
        width: 100vw;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2em;
        background-size: cover;
        background: ${black};
        color: ${white};
        cursor: pointer;
        text-decoration: none;
        flex-wrap: wrap;
        @media ${sm} {
            width: 33vw;
            flex-basis: 33%;
            height: 50vh;
        }
        &:hover {
            img {
                opacity: 0.4;
            }
        }
        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: ${black};
            z-index: 3;
            visibility: hidden;
        }
    `;

    const Title = styled.h2`
        margin-top: 0.66em;
        line-height: 1.33em;
        font-size: 1.66rem;
        z-index: 1;
        text-shadow: 0 0 1em ${shadow};
    `;

    const Subtitle = styled.h5`
        font-size: 1.11rem;
        opacity: 0.88;
        line-height: 1.22em;
        z-index: 1;
    `;

    const Img = styled.img`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        opacity: 0.75;
        transition: 0.2s ease-in-out;
    `;
    return (
        <Base to={url}>
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
            <Img src={require(`../../assets/images/${img}`)} />
        </Base>
    )
}


const GenerateCases = ({posts}) => {
    return posts.map((caseItem) => (
        <Case
            key={caseItem.id}
            img={caseItem.img}
            title={caseItem.title}
            subtitle={caseItem.subtitle}
            url={caseItem.url}
        />
    ));
}

export default Case
export {GenerateCases};