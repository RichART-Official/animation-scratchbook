import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../layouts/defaultLayout"

const Main = styled.main`
  height: 80vh;
  padding: 5em;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO />
    <Main>
      <h1>Page not found</h1>
      <p>Error 404</p>
    </Main>
  </Layout>
)

export default NotFoundPage
