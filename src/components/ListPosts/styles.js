import styled from "styled-components"

export const Container = styled.div`
  height: auto;
  margin: auto;

  width: 100%;

  margin-top: 10px;
  padding: 0 3%;

  display: flex;
  justify-content: center;
`
export const List = styled.ul`
  width: 100%;
  margin-top: 10px;
  border: 1px solid #4c6970;
  box-shadow: -5px 15px 15px #272726;
  border-radius: 5px;

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
  max-width: 250px;
  height: 250px;

  margin-top: 12px;
  cursor: pointer;
  padding: 2px;
  transition: border, opacity 0.4s;

  background: #ad1552;

  border: 1px solid #ad1552;
  border-radius: 5px;

  div {
    height: 80%;
    padding-top: 20px;
    text-align: center;
    h3 {
      color: #dfdfdf;
      font-weight: 500;
      font-family: "Quicksand", sans-serif;
    }
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    background-color: #143c49;
    border-radius: 4px;
    opacity: 0.9;
    color: #fff;
    font-weight: bold;

    span {
      font-weight: 700;
      font-family: "Quicksand", sans-serif;
    }
  }

  :hover {
    opacity: 0.8;
    border: 1px solid #800435;
  }
`
