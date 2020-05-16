import styled from "styled-components"

export const Container = styled.div`
  height: 500px;
  width: 100%;
  margin: auto;
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 270px;

    @media (max-width: 420px) {
      flex-direction: column;
    }
    a {
      margin: 0 30px;

      svg {
        transition: 0.4s;

        &:hover {
          color: #de5bae;
          font-size: 180px;
        }

        @media (max-width: 420px) {
          font-size: 80px;
          margin: 15px 0;
        }
      }
    }
  }
`
