import React from "react";
import styled from "styled-components";

const Title = () => {
  const Text = styled.div`
    font-family: "Zilla Slab", serif;
    font-size: 1.5rem;
    padding-top: 1rem;
    padding-left: 4.5rem;
    color: #2b2b2b;
    margin-top: calc((1.5rem - 2rem) + 1.5rem);
    position: absolute;
    align-items: center;
    justify-items: center;
  `;

  const SubText = styled.div`
    font-family: "Dr Sugiyama";
    font-size: 5rem;
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
