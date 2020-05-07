import React from "react"
import { graphql } from "gatsby"

import Header from "./../components/Header"
import Footer from "./../components/Footer"
import Blog from "./../components/Blog"
import ListPosts from "./../components/ListPosts"

import SEO from "../components/seo"

const Posts = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Header />
      <div style={{ height: "max-content", minHeight: "100vh" }}>
        <Blog>
          <ListPosts data={data} />
        </Blog>
      </div>
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

export default Posts
