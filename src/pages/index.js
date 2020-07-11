import React from "react"
import { Link } from "gatsby"

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

import GlobalStyle from "./../styles/global"
import Header from "./../components/Header"
import Footer from "./../components/Footer"
import SEO from "../components/seo"

import {
  Container,
  Aside,
  HomeContainer,
  PresentationContainer,
  Separator,
  AboutMeContainer,
  TechsContainer,
  SummaryBlogContainer,
} from "./../styles/home"

import nodeImg from "./../assets/node.png"
import reactImg from "./../assets/react.png"
import profileImg from "./../assets/me.jpg"
import deskImg from "./../assets/note.jpg"

const IndexPage = ({ data }) => {
  // const date = new Date()
  // const myAge = date.getFullYear() - 1994

  return (
    <>
      <GlobalStyle />
      <SEO title="Home" />
      <Header />

      <Container>
        <Aside />
        <HomeContainer>
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
                <a href="https://www.instagram.com/kimalovisc/?hl=pt-br">
                  <FontAwesomeIcon icon={faInstagram} size={"3x"} />
                </a>
                <a href="https://www.linkedin.com/in/crisman-santos-94b67aa0/">
                  <FontAwesomeIcon icon={faLinkedin} size={"3x"} />
                </a>
              </footer>
            </div>
          </PresentationContainer>

          <Separator />

          <AboutMeContainer>
            <div>
              <h1>Sobre mim</h1>
            </div>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tempus mollis metus, eu varius arcu tincidunt vel. Integer risus
              eros, rutrum non risus ac, mattis rutrum justo. Vivamus finibus
              massa vel sollicitudin lacinia. Aliquam aliquam venenatis eros a
              congue. Suspendisse enim eros, maximus at consequat at, maximus
              sit amet tortor. Ut nec cursus leo. Proin turpis magna, finibus ut
              massa ac, dapibus lobortis tellus.
            </article>
          </AboutMeContainer>
          <TechsContainer>
            <header>
              <div>
                <img src={nodeImg} alt="NodeJs" />
                <span>Node Js</span>
              </div>
              <div>
                <img src={reactImg} alt="ReactJs" />
                <span>React Js</span>
              </div>
              <div>
                <img src={reactImg} alt="React-Native" />
                <span>React Native</span>
              </div>
            </header>
            <section>
              <ul>
                <li>
                  <span>TypeScript</span>
                </li>
                <li>
                  <span>Express</span>
                </li>
                <li>
                  <span>Styled-Components</span>
                </li>
                <li>
                  <span>PostgreSQL</span>
                </li>
                <li>
                  <span>HTML5</span>
                </li>
                <li>
                  <span>CSS3</span>
                </li>
                <li>
                  <span>Axios</span>
                </li>
                <li>
                  <span>MongoDB</span>
                </li>
                <li>
                  <span>Jest</span>
                </li>
                <li>
                  <span>React-Navigation</span>
                </li>
              </ul>
            </section>
          </TechsContainer>

          <Separator />

          <SummaryBlogContainer>
            <div />
            <img src={deskImg} alt="Desktop" />
            <section>
              <h1>Sobre o Blog</h1>
              <div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  tempus mollis metus, eu varius arcu tincidunt vel. Integer
                  risus eros, rutrum non risus ac, mattis rutrum justo. Vivamus
                  finibus massa vel sollicitudin lacinia. Aliquam aliquam
                  venenatis eros a congue. Suspendisse enim eros, maximus at
                  consequat at, maximus sit amet tortor. Ut nec cursus leo.
                  Proin turpis magna, finibus ut massa ac, dapibus lobortis
                  tellus.
                </span>
                <Link to={"/posts"}>Ver postagens</Link>
              </div>
            </section>
          </SummaryBlogContainer>
        </HomeContainer>
      </Container>
      <Footer />
    </>
  )
}

export default IndexPage
