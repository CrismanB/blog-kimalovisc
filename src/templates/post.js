import React from "react"
import { graphql } from "gatsby"
import { formatDistance } from "date-fns"
import pt from "date-fns/locale/pt-BR"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ data: { markdownRemark } }) => {
  const { html, frontmatter } = markdownRemark
  const { title, date } = frontmatter

  const parseDate = Date.parse(date)
  const dateformatted = formatDistance(parseDate, new Date(), {
    locale: pt,
    addSuffix: true,
  })

  return (
    <>
      <Layout>
        <SEO title="Post" />
        <h1>{title}</h1>
        <p>Atualizado: {dateformatted}</p>
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
        title
      }
    }
  }
`

export default IndexPage
