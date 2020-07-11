import React from "react"
import { Container } from "./styles"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

export default function Blog({ children }) {
  return (
    <Container>
      <strong>Postagens:</strong>
      {children}
    </Container>
  )
}
