import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;

  display: flex;
`

export const Aside = styled.aside`
  height: auto;
  width: 180px;
  background-color: rgba(0, 0, 0, 0.2);

  @media (max-width: 1150px) {
    width: 100px;
  }

  @media (max-width: 740px) {
    width: 20px;
  }

  @media (max-width: 690px) {
    display: none;
  }
`

export const PresentationContainer = styled.section`
  width: 100%;
  display: flex;

  justify-content: center;

  margin: auto;

  img {
    height: 400px;
    width: 300px;
    border-radius: 205px;
    border: 5px solid #02202b;
    box-shadow: 0px 0px 50px #1a1a19;

    @media (max-width: 950px) {
      height: 260px;
      width: 200px;
    }

    @media (max-width: 620px) {
      height: 400px;
      width: 300px;
      border-radius: 20px;
    }
  }

  div {
    margin-left: 60px;
    margin-top: 20px;

    span {
      color: #bcb84b;
      font-size: 20px;
      font-family: "Quicksand", sans-serif;
    }

    h1 {
      font-family: "Questrial", sans-serif;
      font-weight: 500;
      color: #d9d9d9;
      margin-top: 10px;
      margin-bottom: 30px;
      letter-spacing: 3px;

      @media (max-width: 790px) {
        font-size: 34px;
      }

      @media (max-width: 415px) {
        font-size: 30px;
      }
    }

    div {
      display: flex;
      align-items: center;
      margin-left: 0;
      margin-bottom: 35px;

      svg {
        margin-right: 10px;
        cursor: initial;
      }

      & span {
        color: #f5f5f5;
        font-family: "Quicksand", sans-serif;

        @media (max-width: 415px) {
          font-size: 16px;
        }
      }
    }

    footer {
      display: flex;
      justify-content: center;
      svg {
        color: #9ea359;
        margin-left: 20px;

        :hover {
          color: #de5bae;
        }
      }
    }

    @media (max-width: 690px) {
      margin-left: 30px;
    }
  }

  @media (max-width: 620px) {
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
  }
`
