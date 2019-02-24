import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';

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
  z-index: 0;
  box-shadow: 0 14px 25px 0 rgba(0, 0, 0, 0.33);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 25px;
  button{
    cursor: pointer;
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

const Wrapper = styled.div`
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

const Close = styled.div`
  width: 65%;
  height: 90%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
  padding-right: 50px;
  svg {
    cursor: pointer;
  }
 
`;
function Form({ isRegistered = false, closeForm }) {
  return (
    <Layout>
      <Container>
        <Close><CloseIcon onClick={closeForm} /></Close>
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
              className={styles.textField}
            />
          )}
           <TextField
              id="standard-textarea"
              label="Email"
              multiline
              margin="normal"
              className={styles.textField}
            />
             <TextField
              id="standard-textarea"
              label="Password"
              type="password"
              multiline
              fullwidth
              margin="normal"
              className={styles.textField}
            />
            <ButtonWrapper>
              <button>{isRegistered ? <>Sign in</> : <>Sign up</>}</button>
            </ButtonWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
}
export default withStyles(styles)(Form);
