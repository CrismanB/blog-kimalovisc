import styled from "styled-components"

export const Container = styled.div`
  height: auto;
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

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ListItem = styled.li`
  width: 250px;
  height: 250px;
  margin-top: 12px;
  cursor: pointer;
  padding: 2px;
  transition: border, opacity 0.4s;

  background: #bbd2c5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #dbdbdb,
    #abd2c5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #dbdbdb,
    #abd2c5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border: 1px solid #4c6970;
  border-radius: 5px;

  div {
    height: 80%;
    padding-top: 20px;
    text-align: center;
    h3 {
    }
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    background-color: #143c49;
    opacity: 0.9;
    color: #fff;
    font-weight: bold;
  }

  :hover {
    opacity: 0.6;
    border: 2px solid #00478a;
  }
`
