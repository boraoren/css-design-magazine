import React from "react";
import Title from "../../components/header/Title";
import Slogan from "../../components/content/Slogan";
import Image from "../../components/image/Image";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import Wrapper from "./Wrapper";
import BorderedBoxWrapper from "./BorderedBoxWrapper";
import Main from "./Main";

const Home = () => {
  return (
    <Wrapper>
      <BorderedBoxWrapper />
      <Header id={"header"}>
        <Title />
      </Header>
      <Main>
        <Section id={"section"}>
          <Slogan />
        </Section>
      </Main>
      <Footer id={"footer"}>
        <Image />
      </Footer>
    </Wrapper>
  );
};

export default Home;
