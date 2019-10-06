import React from "react";
import styled from "styled-components";

const Title = () => {
  const Text = styled.div`
    font-size: 35px;
    color: #2b2b2b;
    padding-top: 30px;
    padding-left: 125px;
    position: absolute;
    align-items: center;
    justify-items: center;
  `;

  const SubText = styled.div`
    font-family: "Dr Sugiyama";
    font-size: 130px;
    color: #2b2b2b;
    align-items: center;
    justify-items: center;
  `;

  return (
    <React.Fragment>
      <Text>DESIGN</Text>
      <SubText>Magazine</SubText>
    </React.Fragment>
  );
};

export default Title;
