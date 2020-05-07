import React from "react"
import { graphql } from "gatsby"

import Header from "./../components/Header"
import Footer from "./../components/Footer"
import Blog from "./../components/Blog"
import ListPosts from "./../components/ListPosts"
import SEO from "../components/seo"

import {
  Container,
  Title,
  ContentContainer,
  TechContainer,
  ProfileContainer,
} from "./../styles/home"
import techImg from "./../assets/tech.jpg"

const IndexPage = ({ data }) => {
  const date = new Date()
  const myAge = date.getFullYear() - 1994

  return (
    <>
      <SEO title="Home" />
      <Header />
      <Container>
        <div>
          <Title>Programação & Tecnologia</Title>
          <ContentContainer>
            <TechContainer>
              <img src={techImg} alt={"Tecnologia"} />
              <span>
                Este blog foi feito com a intenção de praticar mais sobre
                desenvolvimento web mas também quero trazer algumas dicas e
                projetos e deixar como portfólio. Fiz este blog usando o{"  "}
                <a href={"https://www.gatsbyjs.org/"}>Gatsby</a> que é um
                framework gratuito baseado no React para criação de sites e
                aplicativos rápidos.
              </span>
            </TechContainer>
            <ProfileContainer>
              <h1>Sou Crisman Santos</h1>
              <img
                src={
                  "https://media-exp1.licdn.com/dms/image/C4D03AQFYS_pshZ3Dww/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=6KGAUy-5DRH_B122-u_hgxAGj_NwIw4jPRYG0zu47fw"
                }
                alt={"Crisman Santos"}
              />
              <span>
                Tenho {myAge}, sou formado em análise e desenvolvimento de
                sistemas na <a href={"http://www.umc.br/home"}>UMC</a>{" "}
                (Universidade de Mogi das Cruzes). Sou desenvolvedor fullstack
                JavaScript usando Node, ReactJS e React-native como principais
                ferramentas. Estudante do bootcamp da{" "}
                <a href={"https://rocketseat.com.br/"}>Rocketseat</a>.
              </span>
            </ProfileContainer>
          </ContentContainer>
          <Blog>
            <ListPosts data={data} />
          </Blog>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "DD/MM")
            path
          }
        }
      }
    }
  }
`

export default IndexPage
