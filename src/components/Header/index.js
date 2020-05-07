import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import {
  Container,
  Logo,
  Nav,
  SocialMedia,
  Separater,
  ToggleButton,
  NavList,
} from "./styles"
import GlobalStyle from "./../../styles/global"

export default function Header() {
  const [toggle, setToggle] = useState(false)

  function handleToggleButton() {
    setToggle(!toggle)
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav>
          <Logo>
            <b>KIMALOVISC</b>
          </Logo>
          <Separater>|</Separater>
          <ToggleButton
            icon={faBars}
            size={"2x"}
            onClick={handleToggleButton}
            toggle={toggle}
          />
          <NavList toggle={toggle}>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/posts"}>Posts</Link>
            </li>
            <li>
              <Link to={"/about"}>Contato</Link>
            </li>
          </NavList>
        </Nav>
        <SocialMedia>
          <FontAwesomeIcon icon={faGithub} size={"3x"} />
          <FontAwesomeIcon icon={faInstagram} size={"3x"} />
          <FontAwesomeIcon icon={faLinkedin} size={"3x"} />
        </SocialMedia>
      </Container>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}