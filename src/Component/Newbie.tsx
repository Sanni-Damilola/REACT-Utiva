import React from "react";
import styled from "styled-components";

const Newbie = () => {
  return (
    <Container>
      <h1>
        Courses available in Utiva <br /> Business Analysis <br /> School Africa
      </h1>
      <span>
        Utiva offers a wide variety of programs and courses led by leading
        industry experts.
      </span>
    </Container>
  );
};

export default Newbie;

const Container = styled.div`
  width: 100%;

  h1 {
    margin-left: 50px;
    width: 70%;
    font-weight: 700;
    font-size: 50px;
    color: rgb(5, 7, 148);
    /* margin: 0; */
    text-align: left;
  }

  span {
    color: rgb(30, 32, 39, 0.8);
    font-size: 15px;
    width: 70%;
    font-weight: 500;
    line-height: 32px;
    margin-left: 50px;
    letter-spacing: 1px;
  }
`;
