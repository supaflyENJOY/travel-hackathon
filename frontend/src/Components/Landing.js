import React from "react";
import styled from "styled-components";
import Form from './Form'
const Header = styled.div`
  margin-top: 40px;
  height: 40px;
  width: 80%;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 2em;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
  }
  a {
    font-size: 1em;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.86;
    letter-spacing: normal;
    text-decoration: none;
    color: black;
  }
`;

const Links = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MainPage = styled.section`
  margin: 90px 0 0 0;
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 90%;
`;
const Title = styled.p`
  font-size: 4em;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: left;
  margin: 20px 0 20px 0;
`;

const LeftSide = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: left;
  button{
    border:none;
    color:white;
    width: 221.9px;
    height: 62.9px;
    border-radius: 4px;
    font-size: 1em;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.4;
    letter-spacing: normal;
    box-shadow: 0 9px 24px 0 rgba(0, 0, 0, 0.27);
   background-color: #c374ff;
  }
  button:hover{
    box-shadow: 0 9px 44px 0 rgba(0, 0, 0, 0.27);
  }
`;
const RightSide = styled.div`
  width: 60%;
  img {
    max-width: 90%;
    max-height: 90%;
  }
`;
const Discover = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  margin-top: 100px;
  width: 90%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin-top: 60px;
`
const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 80px;
  }
`
export default function Landing() {
  return (
    <>
      <Header>
        <p>Trans.</p>
        <Links>
          <a href="#">Plot the route</a>
          <a href="#">Sign in</a>
          <a href="#">Sign up</a>
        </Links>
      </Header>
      <MainPage>
        <LeftSide>
          <img src={require("../images/bird.svg")} />
          <Title>Where no man has gone before!</Title>
          <p>
            Search for unique, mostly unknow places. Route your paths
            thoughtfully.{" "}
          </p>
          <button>Search</button>
        </LeftSide>
        <RightSide>
          <img src={require("../images/art.svg")} />
        </RightSide>
      </MainPage>
      <Discover>
        <Title>Discover & Visit</Title>
        <p>Discover unique places and share photos by posting them on Trans.</p>
        <ImageContainer>
          <ImageBox>
            <img src={require('../images/like.svg')} />
            <p>Like</p>
          </ImageBox>
          <ImageBox>
            <img src={require('../images/frame-landscape.svg')} />
            <p>Add reviews</p>
          </ImageBox>
          <ImageBox>
            <img src={require('../images/navigation.svg')} />
            <p>Plot the route</p>
          </ImageBox>
          <ImageBox>
            <img src={require('../images/star_color.svg')} />
            <p>Add to favorites</p>
          </ImageBox>
        </ImageContainer>
      </Discover>
      <Form />
    </>
  );
}
