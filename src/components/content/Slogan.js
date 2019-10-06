import React from "react";
import styled from "styled-components";

const Slogan = () => {
  const Text = styled.div`
    color: #ebebeb;
    background-color: #2b2b2b;
    font-size: 32px;
  `;

  const SubText = styled.div`
    color: #a7a7a7;
    font-size: 18px;
  `;

  return (
    <React.Fragment>
      <Text>PRODUCT INSPIRATION</Text>
      <SubText>Effect if in up no depend seemed. Ecstatic elegance</SubText>
    </React.Fragment>
  );
};

export default Slogan;
