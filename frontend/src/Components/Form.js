import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  textField: {
    width: "400px"
  }
};

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
  box-shadow: 0 14px 25px 0 rgba(0, 0, 0, 0.33);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  text-align: left;
  display: flex;
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
function form(isRegistered = false, { textField }) {
  return (
    <Layout>
      <Container>
        <Wrapper>
          {isRegistered ? <h1>Sign in</h1> : <h1>Sign up</h1>}
          {isRegistered ? (
            <p>Sign in using Google or fill in the form below</p>
          ) : (
            <p>Sign up using Google or fill in the form below</p>
          )}
          {isRegistered && (
            <TextField
              id="standard-textarea"
              label="Username"
              multiline
              margin="normal"
              className={textField}
            />
          )}
           <TextField
              id="standard-textarea"
              label="Email"
              multiline
              margin="normal"
              className={textField}
            />
             <TextField
              id="standard-textarea"
              label="Password"
              type="password"
              multiline
              fullwidth
              margin="normal"
              className={textField}
            />
        </Wrapper>
      </Container>
    </Layout>
  );
}
export default withStyles(styles)(form);
