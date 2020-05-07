import React from "react"
import { Link } from "gatsby"

import SEO from "./../seo"

import { Container, List, ListItem } from "./styles"

const ListPosts = ({ data: { allMarkdownRemark } }) => {
  //const date = new Date()
  const { edges } = allMarkdownRemark

  return (
    <>
      <SEO title="Posts" />
      <Container>
        <List>
          {edges.map(({ node }) => {
            return (
              <ListItem key={node.id}>
                <Link style={{ color: "#000" }} to={node.frontmatter.path}>
                  <div>
                    <h3>{node.frontmatter.title}</h3>
                  </div>
                  <footer>
                    <span>Atualizado {node.frontmatter.date}</span>
                  </footer>
                </Link>
              </ListItem>
            )
          })}
        </List>
      </Container>
    </>
  )
}

export default ListPosts
