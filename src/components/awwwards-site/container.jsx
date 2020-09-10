import React, {forwardRef} from "react"
import styled from "styled-components"
import theme from "../../styles/theme"

const { mediaQuery, container, center } = theme

const ContainerBase = styled.div`
  margin: ${container.xxs};
  @media ${mediaQuery.xs} {
    margin: 0 ${container.xs};
  }
  @media ${mediaQuery.sm} {
    margin: 0 ${container.sm};
  }
  @media ${mediaQuery.md} {
    margin: 0 ${container.md};
  }
  @media ${mediaQuery.lg} {
    margin: 0 ${container.lg};
  }
  @media ${mediaQuery.xl} {
    margin: 0 ${container.xl};
  }
`

const Container = forwardRef(({ className, children }, ref) => (
  <ContainerBase ref={ref} className={className}>{children}</ContainerBase>
));

export default Container
