import React from "react";
import styled from 'styled-components'

const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(8, 8, 12, 0.96);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .clear {
    position: absolute;
    top: 60px;
    right: 85px;
  }
`;

export default function popUp(props){
  return(
    <Layout>
      {props.img}
    </Layout>
  )
}