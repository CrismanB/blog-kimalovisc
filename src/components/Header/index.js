import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import {
  Container,
  Logo,
  Nav,
  Separator,
  ToggleButton,
  NavList,
} from "./styles"
import GlobalStyle from "./../../styles/global"

export default function Header() {
  const [toggle, setToggle] = useState(false | undefined)

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
          <Separator>|</Separator>
          <ToggleButton
            icon={faBars}
            size={"2x"}
            onClick={handleToggleButton}
            toggle={toggle}
          />
          <NavList toggle={toggle}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/posts"}>Blog</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contato</Link>
            </li>
          </NavList>
        </Nav>
        {/* <SocialMedia>
          <a href="https://github.com/CrismanB">
            <FontAwesomeIcon icon={faGithub} size={"4x"} />
          </a>
          <a href="https://www.instagram.com/kimalovisc/?hl=pt-br">
            <FontAwesomeIcon icon={faInstagram} size={"4x"} />
          </a>
          <a href="https://www.linkedin.com/in/crisman-santos-94b67aa0/">
            <FontAwesomeIcon icon={faLinkedin} size={"4x"} />
          </a>
        </SocialMedia> */}
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
