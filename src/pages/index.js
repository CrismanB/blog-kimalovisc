import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhone,
  faMapPin,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons"
// import {
//   faGithub,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons"

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
  // SummaryBlogContainer,
} from "./../styles/home"

import nodeImg from "./../assets/node.png"
import reactImg from "./../assets/react.png"
//import profileImg from "./../assets/profile.jpg"
import logo from "./../images/kimalovisc.png"
//import deskImg from "./../assets/note.jpg"

const IndexPage = ({ data }) => {
  const date = new Date()
  //const myAge = date.getFullYear() - 1994

  return (
    <>
      <GlobalStyle />
      <SEO title="Home" />
      <Header />

      <Container>
        <Aside />
        <HomeContainer>
          <PresentationContainer>
            <img src={logo} alt="Crisman Santos" />
            <div>
              <h3>KIMALOVISC 63ID TECNOLOGIA LTDA</h3>
              <span>Desenvolvimento web</span>

              <div>
                <FontAwesomeIcon icon={faBuilding} size={"2x"} />
                <span>CNPJ - 43.371.063/0001-67</span>
              </div>

              <div>
                <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
                <span>kimalovisc63id@hotmail.com</span>
              </div>

              <div>
                <FontAwesomeIcon icon={faPhone} size={"2x"} />
                <span>+55 11 94189-7433</span>
              </div>

              <div>
                <FontAwesomeIcon icon={faMapPin} size={"2x"} />
                <span>Itaquaquecetuba, São Paulo - Brasil</span>
              </div>

              {/* <footer>
                <a href="https://github.com/CrismanB">
                  <FontAwesomeIcon icon={faGithub} size={"3x"} />
                </a>

                <a href="https://www.linkedin.com/in/crisman-santos-94b67aa0/">
                  <FontAwesomeIcon icon={faLinkedin} size={"3x"} />
                </a>
                <a href="https://www.instagram.com/kimalovisc/?hl=pt-br">
                  <FontAwesomeIcon icon={faInstagram} size={"3x"} />
                </a>
              </footer> */}
            </div>
          </PresentationContainer>

          <Separator />

          <AboutMeContainer>
            <div>
              <h1>Sobre a empresa</h1>
            </div>
            <article>
              Fundada em Setembro de 2021 porém com mais de 1 ano de experiência
              no mercado, a {<b>Kimalovisc 63ID Tecnologia LTDA</b>} é uma
              empresa que tem um compromisso de promover bons resultados e
              experiências através da tecnologia para todos os nossos clientes.
              Somos guiados pela inovação e pela entrega de soluções que
              realmente atendem o que nossos clientes desejam.{" "}
              {/* formado em análise e desenvolvimento de
              sistemas na <a href={"http://www.umc.br/home"}>UMC</a>{" "}
              (Universidade de Mogi das Cruzes, São Paulo). Apaixonado por
              desenvolvimento desde quando fiz minhas primeiras linhas de código
              no Excel VBA no meu primeiro emprego. Sou desenvolvedor Fullstack
              JavaScript usando <b>Node JS</b>, <b>React JS</b> e{" "}
              <b>React-Native</b> como principais ferramentas. Estudante do
              bootcamp da <a href={"https://rocketseat.com.br/"}>Rocketseat</a>{" "}
              com certificado da 9º turma do GoStack.{" "} */}
              <i>
                Abaixo algumas das tecnologias e bibliotecas utilizadas em
                nossos projetos.
              </i>
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
                <li>
                  <span>Redux</span>
                </li>
              </ul>
            </section>
          </TechsContainer>

          {/* <Separator /> */}

          {/* <SummaryBlogContainer>
            <div />
            <img src={deskImg} alt="Desktop" />
            <section>
              <h1>Sobre o Blog</h1>
              <div>
                <p>
                  Esse blog foi feito com{" "}
                  <a href={"https://www.gatsbyjs.org/"}>Gatsby</a> que é um
                  framework gratuito baseado no React para criação de sites e
                  aplicativos rápidos. A parte de estilização utilizei a
                  biblioteca{" "}
                  <a href={"https://styled-components.com"}>
                    Styled Components
                  </a>{" "}
                  que é incrivel para estilizar os componentes da aplicação.
                </p>
                <p>
                  As postagens do blog serão sobre dicas e exemplos de
                  programação da linguagens que estudo.{" "}
                  <span aria-label="tech" role="img">
                    💻
                  </span>
                </p>

                <Link to={"/posts"}>Ver postagens</Link>
              </div>
            </section>
          </SummaryBlogContainer> */}
        </HomeContainer>
      </Container>
      <Footer />
    </>
  )
}

export default IndexPage
