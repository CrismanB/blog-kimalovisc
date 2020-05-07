import React from "react"
//import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "./../components/Header"
import { Container } from "./../styles/aboutme"
import GlobalStyle from "./../styles/global"

const AboutMe = () => (
  <>
    <GlobalStyle />
    <SEO title="Sobre mim" />
    <Header />
    <Container>
      <h1>Sobre mim</h1>
      <p>Welcome to page 2</p>
    </Container>
  </>
)

export default AboutMe
