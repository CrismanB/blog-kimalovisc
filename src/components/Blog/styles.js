import styled from "styled-components"

export const Container = styled.div`
  min-height: 75vh;
  height: auto;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
`

export const Title = styled.div`
  width: 200px;
  height: max-content;
  background-color: rgba(230, 214, 21, 0.05);
  border-radius: 5px;
  margin-left: 60px;

  h2 {
    color: #fff;
    padding: 5px 0 5px 20px;
  }
  @media (max-width: 620px) {
    margin-left: 2%;
  }
`
