import React from "react";
import styled from "styled-components";
import { HiOutlineArrowRight } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";
import map from "./store/map.72e8dc51.svg";
import circle1 from "./store/circle1.jpg";
import circle2 from "./store/circle2.jpg";
import circle3 from "./store/circle3.jpg";
import circle4 from "./store/circle4.jpeg";
import circle5 from "./store/circle5.jpg";
import circle6 from "./store/circle6.jpg";
import circle7 from "./store/circle7.jpg";

const Buildein = () => {
  return (
    <Container>
      <Div1>
        <H1>Building Top Tech Talents for the World</H1>
        <Span>
          One Single Platform That Helps You Learn Tech and Helps Companies Hire
          you Fast - 100X Better
        </Span>
        <Wrapper>
          <Button>
            <span>Individual</span>
            <Icon>
              <HiOutlineArrowRight />
            </Icon>
          </Button>
          <Button>
            <span>Business</span>
            <Icon>
              <HiOutlineArrowRight />
            </Icon>
          </Button>
          <Button>
            <span>Impact</span>
            <Icon>
              <HiOutlineArrowRight />
            </Icon>
          </Button>
        </Wrapper>
      </Div1>
      <Div2 src={map} />

      <Image_wrapper>
        <Image1 src={circle1} />
        <div>Read This Story</div>
      </Image_wrapper>
      <Image2 src={circle2} />
      <Image3 src={circle3} />
      <Image4 src={circle4} />
      <Image5 src={circle5} />
      <Image6 src={circle6} />
      <Image7 src={circle7} />

      <Read_Testiomonials_wrapper>
        <span>
          Read Testimonials
          <div>
            <BsArrowUpRight />
          </div>
        </span>
        <p>Over 20 amazing stories</p>
      </Read_Testiomonials_wrapper>
    </Container>
  );
};

export default Buildein;

const Read_Testiomonials_wrapper = styled.div`
  position: absolute;
  bottom: 25%;
  right: 5%;

  div {
    font-size: auto;
  }
  span {
    display: flex;
    font-size: 14px;
    color: darkblue;
    font-weight: 700;
    text-transform: capitalize;
  }
  p {
    margin: 0;
    font-size: 12px;
    text-transform: capitalize;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.5);
  }

  flex-direction: column;
`;

const Image_wrapper = styled.div`
  div {
    font-size: 10px;
    padding: 7px 24px;
    border-radius: 15px;
    color: transparent;
    position: absolute;
    right: 10%;
    top: 60%;
  }
`;

const Image1 = styled.img`
  position: absolute;
  right: 10%;
  width: 40px;
  object-fit: cover;
  height: 40px;
  border: 2px solid lightgreen;

  border-radius: 50%;
  cursor: pointer;
  :hover {
    border: 3px solid lightgreen;
  }
`;
const Image5 = styled.img`
  position: absolute;
  top: 69%;
  right: 16%;
  width: 40px;
  object-fit: cover;
  height: 40px;
  border: 2px solid lightgreen;

  border-radius: 50%;
  cursor: pointer;
  :hover {
    border: 3px solid lightgreen;
  }
`;
const Image6 = styled.img`
  position: absolute;
  right: 18%;
  top: 69%;
  width: 40px;
  object-fit: cover;
  height: 40px;
  border: 2px solid lightgreen;

  border-radius: 50%;
  cursor: pointer;
  :hover {
    border: 3px solid lightgreen;
  }
`;
const Image7 = styled.img`
  position: absolute;
  top: 69%;
  right: 20%;
  width: 40px;
  object-fit: cover;
  height: 40px;
  border: 2px solid lightgreen;

  border-radius: 50%;
  cursor: pointer;
  :hover {
    border: 3px solid lightgreen;
  }
`;
const Image2 = styled.img`
  position: absolute;
  top: 50%;
  width: 40px;
  object-fit: cover;
  height: 40px;
  border: 2px solid lightgreen;

  border-radius: 50%;
  cursor: pointer;
  :hover {
    border: 3px solid lightgreen;
  }
`;
const Image3 = styled.img`
  position: absolute;
  right: 40%;
  width: 40px;
  object-fit: cover;
  height: 40px;
  border: 2px solid lightgreen;

  border-radius: 50%;
  cursor: pointer;
  :hover {
    border: 3px solid lightgreen;
  }
`;
const Image4 = styled.img`
  position: absolute;
  right: 30%;
  width: 40px;
  object-fit: cover;
  height: 40px;
  border: 2px solid lightgreen;
  border-radius: 50%;

  :hover {
    border: 3px solid lightgreen;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  margin-left: 10px;
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  padding: 19px 25px;
  background-color: rgb(251, 175, 27);
  border-radius: 10px;
  color: white;
  font-weight: 500;

  :hover {
    margin-bottom: 5px;
    transition: all 400ms;
  }
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 77px;
  color: rgb(5, 7, 148);
  margin: 0;
`;
const Span = styled.span`
  color: rgb(30, 32, 39, 0.8);
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
`;
const Wrapper = styled.div`
  width: 510px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div1 = styled.div`
  width: 500px;
  flex-direction: column;
`;
const Div2 = styled.img`
  width: 800px;
  height: 100%;
  position: relative;
`;
