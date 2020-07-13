import React from "react"
import { Container, Title } from "./styles"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

export default function Blog({ children }) {
  return (
    <Container>
      <Title>
        <h2>Postagens:</h2>
      </Title>
      {children}
    </Container>
  )
}
