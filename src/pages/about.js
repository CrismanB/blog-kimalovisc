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
      <h1>
        Em construção...{" "}
        <span role="img" aria-label="hammer">
          🔨
        </span>
      </h1>
    </Container>
  </>
)

export default AboutMe
