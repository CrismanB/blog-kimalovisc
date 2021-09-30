import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { Container, Content } from "./styles"

export default function Footer() {
  return (
    <Container>
      <Content>
        <span>
          Desenvolvido com{" "}
          <FontAwesomeIcon
            icon={faHeart}
            color={"#c93c3c"}
            style={{ cursor: "none" }}
          />{" "}
          pela KIMALOVISC
        </span>
      </Content>
    </Container>
  )
}
