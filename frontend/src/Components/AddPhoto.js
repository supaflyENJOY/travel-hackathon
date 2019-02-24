import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

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
`;

const Container = styled.div`
  width: 65%;
  height: 90%;
  background: white;
  border-radius: 27px;
  z-index: 0;
  box-shadow: 0 14px 25px 0 rgba(0, 0, 0, 0.33);
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border: none;
    color: white;
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
  button:hover {
    box-shadow: 0 9px 44px 0 rgba(0, 0, 0, 0.27);
  }
`;
const Wrapper = styled.div`
  padding-bottom: 50px;
  width: 80%;
  height: 80%;
  text-align: left;
  display: flex;
  z-index: 2;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h1 {
    font-size: 4em;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.63;
    letter-spacing: normal;
  }
  p {
    font-size: 1em;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.59;
    letter-spacing: normal;
    text-align: left;
    color: #777777;
  }
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 40px 0;
`;
const ImageWrapper = styled.div`
  width: 40%;
  background-color: #d3d3d3;
  img {
    max-width: 80%;
    margin-left: 10%;
  }
`;
const Inputs = styled.div`
  margin: 0 40px 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function addPhoto() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <h1>Add Photo</h1>
          <p>Upload a photo and fill in all the text holders below</p>
          <InputForm>
            <ImageWrapper>
              <img src={require("../images/frame.svg")} />
            </ImageWrapper>
            <Inputs>
              <TextField
                id="standard-textarea"
                label="Title"
                multiline
                margin="normal"
              />
              <TextField
                id="standard-textarea"
                label="Address"
                multiline
                margin="normal"
              />
              <TextField
                id="standard-textarea"
                label="Description"
                multiline
                margin="normal"
              />
            </Inputs>
          </InputForm>
          <button>Post</button>
        </Wrapper>
      </Container>
    </Layout>
  );
}
