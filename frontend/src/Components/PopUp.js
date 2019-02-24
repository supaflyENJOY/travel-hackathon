import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .arrows{
    position: absolute
    width: 56px;
  }
  .prev{
    left: 8%;
    transform: rotate(180deg)
  }
  .next{
    right: 8%;
  }
`;
const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 27px;
  }
  height: 40%;
  width: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 80%;
`;

const SimilarPhotos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  img{
    height: 5em;
    width: 5em;
    border-radius: 50%;  
  }
`

const Container = styled.div`
  width: 60%;
  background-color: #ffffff;
  height: 90%;
  border-radius: 27px;
  box-shadow: 0 14px 25px 0 rgba(0, 0, 0, 0.33);
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-stretch: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: left;
  }
  .title {
    font-size: 2em;
    font-style: normal;
    color: #000000;
  }
  .address {
    font-size: 1em;
    font-weight: normal;
    font-style: normal;
    color: #b8b8b8;
  }
  .description {
    font-size: 1em;
    font-weight: 300;
    font-style: normal;
    line-height: 1.41;
    color: #000000;
  }
  .similar {
    font-size: 1.2em;
    font-weight: 500;
    font-style: normal;
    margin: 1.2em 0 24px 0;
    color: #c374ff;
  }
  .close {
    position: absolute;
    width: 24px;
    filter: invert(100%);
    margin-top: 36px;
    right: calc(20% + 36px);
  }
`;

export default function popUp({ id, photo, closePopup }) {
  console.log(photo);
  return (
    <Layout>
      <Container>
        <img className={"close"} onClick={closePopup} src={require("../images/close.svg")} />
        <ImageContainer>
          <img src={photo.src} />
        </ImageContainer>
        <Wrapper>
          <p className={"title"}>Green woods</p>
          <p className={"address"}>
            445 Mount Eden Road, Mount Eden, Auckland{" "}
          </p>
          <p className={"description"}>
            It's so easy to blow it—to never leave the French Quarter or end up
            in a Yelp-recommended jazz club on Bourbon Street that's packed with
            tourists wearing Mardi Gras beads no matter the time of year.{" "}
          </p>
          <p className={"similar"}>Similar photos</p>
          <SimilarPhotos>
            <img src={photo.src} />
            <img src={photo.src} />
            <img src={photo.src} />
            <img src={photo.src} />
            <img src={photo.src} />
          </SimilarPhotos>
        </Wrapper>
      </Container>
      <img src={require('../images/right-arrow.svg')} alt="arrow" className="arrows next" />
      <img src={require('../images/right-arrow.svg')} alt="exit" className="arrows prev" />
    </Layout>
  );
}
