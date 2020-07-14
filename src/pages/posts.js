import React from "react"
import { graphql } from "gatsby"

import Header from "./../components/Header"
import Footer from "./../components/Footer"
import Blog from "./../components/Blog"
import ListPosts from "./../components/ListPosts"

import SEO from "../components/seo"

import { Aside, Container } from "./../styles/home"

const Posts = ({ data }) => {
  return (
    <>
      <SEO title="Blog" />
      <Header />

      <Container>
        <Aside />
        <Blog>
          <ListPosts data={data} />
        </Blog>
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
            tech
            date
            path
            image
            description
          }
        }
      }
    }
  }
`

export default Posts
