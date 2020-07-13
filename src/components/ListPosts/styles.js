import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  height: auto;
  margin: auto;

  width: 100%;

  margin-top: 0px;
  padding: 0 3%;

  display: flex;
  justify-content: center;
`
export const List = styled.ul`
  width: 100%;

  margin: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  @media (max-width: 1015px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ListItem = styled.li`
  width: 100%;
  max-width: 240px;
  height: 260px;

  border: 1px solid #84881d;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: 0.4s;
  :hover {
    background-color: rgba(103, 59, 136, 0.2);
    border: 1px solid #e62686;
  }
`

export const Content = styled(Link)`
  height: 93%;
  width: 93%;
  color: #fff;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  position: relative;
  transition: 0.4s;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  h1 {
    font-size: 24px;
    color: #c6c13f;

    margin-top: 5px;
  }

  h2 {
    font-size: 18px;
  }

  span {
    margin-left: 5px;
    font-weight: bold;
    color: #c6c13f;
  }

  img {
    padding: 10px;
    position: absolute;
    top: 40px;
    left: 0;
    opacity: 0.29;
    z-index: -101;
  }

  :hover {
    height: 96%;
    width: 96%;
  }
`
