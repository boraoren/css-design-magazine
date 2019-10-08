import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  grid-template-rows: 10px 1fr 40px 100px;
  justify-items: center;

  @media (max-width: 600px) {
    grid-template-rows: 10px 1fr 10px 150px;
  }
`;

export default Wrapper;
