import React from "react"
//import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import SEO from "../components/seo"
import Header from "./../components/Header"
import Footer from "./../components/Footer"
import { Container } from "./../styles/aboutme"

const AboutMe = () => (
  <>
    <SEO title="Sobre mim" />
    <Header />
    <Container>
      <h2>Entre em contato comigo e conheça meu portfólio!</h2>

      <div>
        <a href="https://github.com/CrismanB">
          <FontAwesomeIcon icon={faGithub} size={"9x"} />
        </a>
        <a href="https://www.instagram.com/kimalovisc/?hl=pt-br">
          <FontAwesomeIcon icon={faInstagram} size={"9x"} />
        </a>
        <a href="https://www.linkedin.com/in/crisman-santos-94b67aa0/">
          <FontAwesomeIcon icon={faLinkedin} size={"9x"} />
        </a>
      </div>
    </Container>
  </>
)

export default AboutMe

{
  /* <span role="img" aria-label="hammer">
🔨
</span> */
}
