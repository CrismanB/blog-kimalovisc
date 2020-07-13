import styled, { keyframes } from "styled-components"
import { device } from "./../../styles/displaySize"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const moveIn = keyframes`
from {
    opacity: 0;
    transform: translateY(-35%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`

export const Container = styled.div`
  width: 100%;
  height: 85px;

  margin: auto;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background: #897d3a;
  padding: 0 45px;
  box-shadow: 0 5px 15px #272726;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 101;

  @media ${device.tablet} {
  }

  @media ${device.mobileL} {
  }
`

export const Logo = styled.div`
  display: flex;
  padding-left: 5px;
  align-items: center;
  padding-right: 25px;

  b {
    color: #fdfdfd;
    font-size: 22px;
    font-weight: 700;
    font-family: "Quicksand", sans-serif;
  }
`

export const Nav = styled.div`
  height: 100%;
  display: flex;

  align-items: center;
`

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  li {
    margin: auto;

    a {
      padding: 0 12px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      font-family: "Quicksand", sans-serif;
      transition: 0.4s;

      cursor: pointer;

      :hover {
        color: #de5bae;
        font-size: 18px;
        align-content: stretch;
      }
    }
  }

  @media ${device.tablet} {
    animation: ${moveIn} 0.5s;
    animation-delay: 250ms;
    animation-fill-mode: backwards;
    overflow: hidden;

    position: absolute;
    top: 90px;
    left: 0;
    height: auto;
    width: 95%;

    margin-left: 2.5%;

    background: #56477a;
    opacity: 0.98;
    border-radius: 5px;

    display: ${props => (props.toggle ? "block" : "none")};
    flex-direction: column;
    z-index: 1;
    li {
      a {
        display: flex;
        justify-content: center;
        padding: 5px 0;
        width: 100%;
        font-size: 32px;
        border-bottom: solid 1px rgba(255, 255, 255, 0.5);

        :hover {
          background: rgba(0, 0, 0, 0.2);
          font-size: 36px;
          color: #de5bae;
          -webkit-text-stroke-width: 1px; /* largura da borda */
        }
      }
    }
  }
`

export const ToggleButton = styled(FontAwesomeIcon)`
  display: none;
  background: none;
  outline: none;
  border: none;
  color: ${props => (props.toggle ? "#de5bae" : "#FFF")};
  transition: 0.3s;

  cursor: pointer;

  @media ${device.tablet} {
    display: block;
  }
`

export const SocialMedia = styled.div`
  svg {
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
    padding: 0 8px;
    :hover {
      color: #de5bae;
    }
  }

  @media (max-width: 400px) {
    display: none;
  }
`

export const Separator = styled.span`
  color: #fff;
  font-size: 26px;
  align-self: center;
  padding-right: 8px;
`
