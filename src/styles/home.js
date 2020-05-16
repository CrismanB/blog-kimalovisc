import styled from "styled-components"
import "typeface-quicksand"

export const Container = styled.div`
  height: auto;
  width: 100%;

  margin-top: 10px;
  padding: 0 3%;

  display: flex;
  justify-content: center;
`
export const Title = styled.h1`
  color: #ebebeb;
  text-shadow: -10px 10px 10px #272726;
  margin: 0;
  margin-left: 2%;
  font-weight: 400;
  font-family: "Quicksand", sans-serif;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-radius: 8px;

  @media (max-width: 1125px) {
    flex-direction: column;
  }
`
export const TechContainer = styled.section`
  width: 100%;
  max-width: 800px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #143c49;
  border: 1px solid #4c6970;
  border-radius: 8px;
  box-shadow: -10px 15px 15px #272726;
  margin-right: 15px;

  img {
    height: 300px;
    width: 500px;

    margin: 10px 35px;
    margin-top: 25px;
    opacity: 0.8;
    border-radius: 4px;

    @media (max-width: 600px) {
      height: 100%;
      width: 100%;
    }

    @media (max-width: 375px) {
      height: 100%;
      width: 100%;
    }
  }

  span {
    padding: 0 20px;
    color: #ebebeb;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    margin-bottom: 20px;
    text-indent: 1.5em;

    a {
      color: #d9d44c;
      font-weight: bold;
      transition: font-size 0.3s;
    }
  }

  @media (max-width: 1125px) {
    height: 100%;
    width: 100%;
    margin-bottom: 10px;
  }
`

export const ProfileContainer = styled.section`
  height: 100%;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #143c49;
  border: 1px solid #4c6970;
  box-shadow: -5px 15px 15px #272726;

  h1 {
    font-size: 22px;
    margin-top: 20px;
    color: #ebebeb;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    white-space: nowrap;
    text-shadow: -10px 7px 10px #272726;
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin-top: 5px;
    z-index: 0;
    box-shadow: 0px 0px 50px #1a1a19;
  }

  span {
    width: 250px;
    color: #ebebeb;
    font-size: 14px;
    margin: 0 10px;
    margin-bottom: 50px;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    vertical-align: middle;
    line-height: 20px;

    a {
      color: #d9d44c;
      font-weight: bold;
      transition: font-size 0.3s;

      :hover {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 1125px) {
    height: 100%;
    width: 100%;

    span {
      width: auto;
    }
  }
`
