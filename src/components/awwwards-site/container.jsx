import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const {mediaQuery, container} = theme;

const ContainerBase = styled.div`
    margin: ${container.xxs};
    @media ${mediaQuery.xs} {
        margin: 0 ${container.xs};
    };
    @media ${mediaQuery.sm} {
        margin: 0 ${container.sm};
    };
    @media ${mediaQuery.md} {
        margin: 0 ${container.md};
    };
    @media ${mediaQuery.lg} {
        margin: 0 ${container.lg};
    };
    @media ${mediaQuery.xl} {
        margin: 0 ${container.xl};
    };
`;

const Container = ({children}) => (
    <ContainerBase>
        {children}
    </ContainerBase>
);

export default Container;