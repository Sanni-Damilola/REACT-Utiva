import React from "react";
import styled from "styled-components";
import circle7 from "./store/circle7.jpg";
import circle4 from "./store/circle4.jpeg";
import circle5 from "./store/circle5.jpg";
import circle6 from "./store/circle6.jpg";
import { AiFillLinkedin } from "react-icons/ai";

const Story = () => {
  return (
    <Container>
      <Div1>Success Stories</Div1>
      <Div2>What our students are saying about their learning experience</Div2>
      <Div3>
        <Wrapper>
          <Image src={circle7} />
          <h5>Wise Dickson</h5>
        </Wrapper>
        <Wrapper>
          <Image src={circle5} />
          <h5>Wise Bola</h5>
        </Wrapper>
        <Wrapper>
          <Image src={circle6} />
          <h5>Wise Anu</h5>
        </Wrapper>
        <Wrapper>
          <Image src={circle4} />
          <h5>Wise Chris</h5>
        </Wrapper>
      </Div3>
      <Div4>
        <Img src={circle7} />
        <Left>
          <h6>Wise Dickson Tinubu</h6>
          <span>Data Fellow</span>
          <p>
            I was looking for something a little more than a training, a school
            I could count on for my continuous skill and professional
            development. Utiva kept coming up so I jumped in. I went through the
            Data Accelerator program and then the ‘Big Data with Python’
            program. I am now a Data Scientist and Consultant.
          </p>
          <Icon>
            <AiFillLinkedin />
          </Icon>
        </Left>
      </Div4>
    </Container>
  );
};

export default Story;

const Wrapper = styled.div``;

const Div1 = styled.h1`
  font-weight: 700;
  font-size: 50px;
  color: white;
  text-align: left;
`;
const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(10, 22, 39);
`;
const Div2 = styled.div`
  margin-left: 56px;
  font-size: 19px;
  font-weight: 500;
  color: white;
`;
const Div3 = styled.div`
  margin-top: 60px;
  width: 40%;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;

  h5 {
    text-align: center;
    color: rgb(0, 0, 0, 0.9);
    color: #fbaf1b;
  }
`;
const Image = styled.img`
  border-radius: 0px 0px 40px 40px;
  width: 90px;
  object-fit: cover;
  height: 90px;
`;
const Left = styled.div`
  width: 60%;

  h6 {
    font-size: 18px;
    color: #fbaf1b;
    margin: 0;
    padding-bottom: 15px;
  }

  span {
    font-size: 15px;
    font-weight: 500;
    height: 170px;
    color: white;
  }

  p {
    font-size: 15px;
    font-weight: 500;
    color: white;
  }
`;
const Div4 = styled.div`
  width: 70%;
  margin-top: 50px;
  display: flex;
  height: 300px;
  justify-content: space-around;
`;
const Icon = styled.div`
  color: #fbaf1b;
  font-size: 24px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 0px 0px 50% 50%;
`;
