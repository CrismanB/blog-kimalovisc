import React from "react"
import { graphql } from "gatsby"
import { formatDistance } from "date-fns"
import pt from "date-fns/locale/pt-BR"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ data: { markdownRemark } }) => {
  const { html, frontmatter } = markdownRemark
  const { description, date } = frontmatter

  const parseDate = Date.parse(date)
  const dateformatted = formatDistance(parseDate, new Date(), {
    locale: pt,
    addSuffix: true,
  })

  return (
    <>
      <Layout>
        <SEO title="Post" />
        <h1
          style={{
            color: "#bcb84b",
          }}
        >
          {description}
        </h1>
        <p
          style={{
            backgroundColor: "rgba(230, 214, 21, 0.05)",
            width: "max-content",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Atualizado: {dateformatted}
        </p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query PostPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        description
      }
    }
  }
`

export default IndexPage
