import React from "react"
import { Container } from "./styles"

export default function Blog({ children }) {
  return (
    <Container>
      <strong>Postagens:</strong>
      {children}
    </Container>
  )
}
