import React, { useCallback } from "react"
import { formatDistance } from "date-fns"
import pt from "date-fns/locale/pt-BR"

import SEO from "./../seo"

import { Container, List, ListItem, Content } from "./styles"

import reactImg from "./../../assets/react.png"
import nodeImg from "./../../assets/node.png"
import defaultImg from "./../../assets/developer_img.png"

const ListPosts = ({ data: { allMarkdownRemark } }) => {
  const { edges } = allMarkdownRemark

  const InfoDate = useCallback(({ children }) => {
    const parseDate = Date.parse(children)
    const dateformatted = formatDistance(parseDate, new Date(), {
      locale: pt,
      addSuffix: true,
    })

    return <span>{dateformatted}</span>
  }, [])

  function ImageTech({ children }) {
    let imgTech

    switch (children) {
      case "react":
        imgTech = reactImg
        break
      case "node":
        imgTech = nodeImg
        break

      default:
        imgTech = defaultImg
    }

    return <img src={imgTech} alt="Tech" />
  }

  return (
    <>
      <SEO title="Posts" />
      <Container>
        <List>
          {edges.map(({ node }) => {
            return (
              <ListItem key={node.id}>
                <Content to={node.frontmatter.path}>
                  <h1>{node.frontmatter.tech}</h1>
                  <h2>{node.frontmatter.description}</h2>
                  <InfoDate>{node.frontmatter.date}</InfoDate>
                  <ImageTech>{node.frontmatter.image}</ImageTech>
                </Content>
              </ListItem>
            )
          })}
        </List>
      </Container>
    </>
  )
}

export default ListPosts
