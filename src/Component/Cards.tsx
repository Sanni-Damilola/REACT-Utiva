import React from "react";
import styled from "styled-components";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import circle2 from "./store/circle2.jpg";

const Cards = () => {
  return (
    <Container>
      <Div1>
        <pre>For Early Professionals</pre>
        <h4>Business Analysis Bootcamp</h4>
        <p>
          From concept to practice, explore the knowledge, tools, and techniques
          that make <br /> a great business analyst.
        </p>
        <Div>
          <div>
            <FiClock />
          </div>
          2 Months
        </Div>
        <Wrap>
          Next class starts:
          <span>November 5, 2022</span>
        </Wrap>
        <Wrapper>
          <Button>
            Learn More
            <Icon>
              <HiOutlineArrowRight />
            </Icon>
          </Button>
        </Wrapper>
      </Div1>

      <Div2 src={circle2} />
    </Container>
  );
};

export default Cards;

const Wrap = styled.div`
  margin-top: 20px;
  color: rgb(0, 3, 169);
  font-size: 15px;
  margin-left: 9px;
  margin-left: 2px;

  span {
    color: rgb(5, 7, 148);
    font-weight: 700;
    margin-left: 4px;
  }
`;

const Wrapper = styled.div`
  width: 510px;
  display: flex;
  margin-top: 30px;
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 150px;
  height: 60px;
  align-items: center;
  background-color: rgb(251, 175, 27);
  border-radius: 10px;
  color: white;
  font-weight: 500;

  :hover {
    margin-top: -4px;
    transition: all 400ms;
  }
`;
const Div1 = styled.div`
  flex-direction: column;
  width: 590px;
  display: flex;
  justify-content: space-around;

  pre {
    width: 140px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(0, 3, 169);
    font-size: 10px;
    background-color: rgb(240, 245, 254);
  }

  h4 {
    font-size: 20px;
    margin: 0;
    font-weight: 800;
    opacity: 90%;
  }

  p {
    color: rgb(0, 0, 0, 0.9);
    font-size: 15px;
  }
`;
const Div2 = styled.img`
  width: 32%;
  height: 75%;
  object-fit: cover;
  border-radius: 10px;
`;

const Div = styled.div`
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
  margin-left: -7px;

  color: rgb(0, 0, 0, 0.7);

  div {
    display: flex;
    margin-right: 4px;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    color: rgb(0, 0, 0);
  }

  span {
    color: rgb(0, 0, 0, 0.7);
    font-size: 14px;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const Container = styled.div`
  display: flex;
  height: 500px;
  justify-content: space-around;
  align-items: center;
`;
