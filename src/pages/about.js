import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhone,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import { Container, Aside, PresentationContainer } from "./../styles/aboutme"

import SEO from "../components/seo"
import Header from "./../components/Header"
import Footer from "./../components/Footer"

import profileImg from "./../assets/profile.jpg"

const AboutMe = () => (
  <>
    <SEO title="Sobre mim" />
    <Header />
    <Container>
      <Aside />

      <PresentationContainer>
        <img src={profileImg} alt="Crisman Santos" />
        <div>
          <span>Desenvolvedor Fullstack</span>
          <h1>CRISMAN SANTOS</h1>

          <div>
            <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
            <span>crisman.bernardo25@hotmail.com</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faPhone} size={"2x"} />
            <span>+55 11 94189-7433</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faMapPin} size={"2x"} />
            <span>Itaquaquecetuba, São Paulo - Brasil</span>
          </div>

          <footer>
            <a href="https://github.com/CrismanB">
              <FontAwesomeIcon icon={faGithub} size={"3x"} />
            </a>

            <a href="https://www.linkedin.com/in/crisman-santos-94b67aa0/">
              <FontAwesomeIcon icon={faLinkedin} size={"3x"} />
            </a>
            <a href="https://www.instagram.com/kimalovisc/?hl=pt-br">
              <FontAwesomeIcon icon={faInstagram} size={"3x"} />
            </a>
          </footer>
        </div>
      </PresentationContainer>
    </Container>
    <Footer />
  </>
)

export default AboutMe
