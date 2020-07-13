import styled, { keyframes } from "styled-components"
import "typeface-quicksand"
import "typeface-fjalla-one"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
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

export const HomeContainer = styled.div`
  max-width: 950px;
  width: 100%;

  display: flex;
  flex-direction: column;

  margin: 0 auto;

  @media (max-width: 950px) {
    margin: 0 20px;
  }

  @media (max-width: 620px) {
    margin: 0;
  }
`

export const PresentationContainer = styled.section`
  width: 100%;
  display: flex;

  margin-top: 80px;
  margin-bottom: 80px;

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

export const Separator = styled.div`
  background-color: #abba58;

  height: 2px;
  width: 100%;
`

export const AboutMeContainer = styled.section`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 50px;

  div {
    width: 300px;
    height: max-content;
    background-color: rgba(230, 214, 21, 0.05);
    border-radius: 5px;

    h1 {
      color: #fff;
      padding: 5px 0 5px 20px;
    }
    @media (max-width: 620px) {
      margin-left: 2%;
    }
  }

  article {
    font-size: 18px;
    font-family: "Quicksand", sans-serif;
    text-indent: 1.5em;
    @media (max-width: 620px) {
      padding: 8px;
    }

    a {
      font-weight: bold;
    }
  }
`
export const TechsContainer = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  header {
    width: 600px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(230, 214, 21, 0.05);
    padding: 15px;
    padding-left: 35px;
    border-radius: 25px;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;

      position: relative;
      img {
        height: 120px;
        width: 170px;
        animation: ${rotate} 12s linear infinite;

        @media (max-width: 620px) {
          height: 70px;
          width: 110px;
        }

        @media (max-width: 415px) {
          height: 50px;
          width: 80px;
        }
      }

      :first-child img {
        animation: none;
        filter: contrast(120%);
      }

      :last-child img {
        animation: ${rotate} 12s linear reverse infinite;
      }

      span {
        font-size: 24px;
        position: absolute;
        bottom: -5px;

        @media (max-width: 620px) {
          font-size: 18px;
        }

        @media (max-width: 415px) {
          font-size: 12px;
        }
      }
    }

    @media (max-width: 620px) {
      flex-direction: column;
      width: 210px;
      padding-left: 15px;
    }
  }

  section {
    height: 100%;
    width: 600px;

    display: flex;
    margin-top: 15px;

    ul {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      position: relative;

      li {
        height: max-content;
        width: max-content;
        padding: 10px 20px;
        border: 2px solid #a38d10;
        border-radius: 30px;
        margin: 3px 8px;

        transition: 0.4s;
        span {
          font-size: 18px;
        }

        :hover {
          border: 2px solid #5be635;
        }

        @media (max-width: 415px) {
          margin: 4px;
          padding: 5px 10px;
        }
      }
    }
  }

  @media (max-width: 620px) {
    flex-direction: row;
    margin-left: 2%;
  }
`

export const SummaryBlogContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 90px;

  img {
    width: 460px;
    height: 320px;
    filter: brightness(0.7);
    border-radius: 10px;

    @media (max-width: 860px) {
      width: 400px;
      height: 270px;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: -50px;
    h1 {
      width: max-content;
      padding: 10px 10px;
      background-color: rgba(230, 214, 21, 0.05);
      border-radius: 10px;
    }

    div {
      display: flex;
      flex-direction: column;
      position: relative;

      > a {
        width: 180px;
        height: 40px;
        text-align: center;
        padding: 10px 25px;
        border-radius: 30px;
        background-color: #abba58;
        color: #000;
        font-weight: bold;
        position: absolute;
        bottom: -50px;
        right: 25px;

        :hover {
          background-color: #de5bae;
        }
      }

      p {
        font-family: "Quicksand", sans-serif;
        font-weight: 600;
        text-indent: 1.5em;
      }

      p + p {
      }
    }

    @media (max-width: 800px) {
      padding: 5px;
      margin: 0;
    }
  }
`

// export const Title = styled.h1`
//   color: #ebebeb;
//   text-shadow: -10px 10px 10px #272726;
//   margin: 0;
//   margin-left: 2%;
//   font-weight: 400;
//   font-family: "Quicksand", sans-serif;
// `

// export const ContentContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 20px;
//   border-radius: 8px;

//   @media (max-width: 1125px) {
//     flex-direction: column;
//   }
// `
// export const TechContainer = styled.section`
//   width: 100%;
//   max-width: 800px;
//   height: 450px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #143c49;
//   border: 1px solid #4c6970;
//   border-radius: 8px;
//   box-shadow: -10px 15px 15px #272726;
//   margin-right: 15px;

//   img {
//     height: 300px;
//     width: 500px;

//     margin: 10px 35px;
//     margin-top: 25px;
//     opacity: 0.8;
//     border-radius: 4px;

//     @media (max-width: 600px) {
//       height: 100%;
//       width: 100%;
//     }

//     @media (max-width: 375px) {
//       height: 100%;
//       width: 100%;
//     }
//   }

//   span {
//     padding: 0 20px;
//     color: #ebebeb;
//     font-family: "Quicksand", sans-serif;
//     font-weight: 500;
//     margin-bottom: 20px;
//     text-indent: 1.5em;

//     a {
//       color: #d9d44c;
//       font-weight: bold;
//       transition: font-size 0.3s;
//     }
//   }

//   @media (max-width: 1125px) {
//     height: 100%;
//     width: 100%;
//     margin-bottom: 10px;
//   }
// `

// export const ProfileContainer = styled.section`
//   height: 100%;
//   width: 350px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border-radius: 8px;
//   background-color: #143c49;
//   border: 1px solid #4c6970;
//   box-shadow: -5px 15px 15px #272726;

//   h1 {
//     font-size: 22px;
//     margin-top: 20px;
//     color: #ebebeb;
//     font-family: "Quicksand", sans-serif;
//     font-weight: 700;
//     white-space: nowrap;
//     text-shadow: -10px 7px 10px #272726;
//   }

//   img {
//     height: 250px;
//     width: 250px;
//     object-fit: cover;
//     border-radius: 50%;
//     margin-top: 5px;
//     z-index: 0;
//     box-shadow: 0px 0px 50px #1a1a19;
//   }

//   span {
//     width: 250px;
//     color: #ebebeb;
//     font-size: 14px;
//     margin: 0 10px;
//     margin-bottom: 50px;
//     font-family: "Quicksand", sans-serif;
//     font-weight: 500;
//     vertical-align: middle;
//     line-height: 20px;

//     a {
//       color: #d9d44c;
//       font-weight: bold;
//       transition: font-size 0.3s;

//       :hover {
//         font-size: 16px;
//       }
//     }
//   }

//   @media (max-width: 1125px) {
//     height: 100%;
//     width: 100%;

//     span {
//       width: auto;
//     }
//   }
// `
