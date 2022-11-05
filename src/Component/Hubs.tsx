import React from "react";
import styled from "styled-components";
import house from "./store/house.jpg";
import circle2 from "./store/circle2.jpg";

const Hubs = () => {
  return (
    <Container>
      <Right>
        <h1>
          Help Us Build <br /> Something Big.
        </h1>
        <br />
        <br />
        <br />
        <span>
          Our world today is moving with companies adopting new <br />{" "}
          technologies to drive and accelerate high-impact growth. However,{" "}
          <br /> it does look like there is a talent gap. Companies struggle to
          find <br /> the right talents and also struggle with the continuous{" "}
          <br /> development of these tech talents.
        </span>
        <br />
        <br />
        <br />
        <span>
          Joining the Utiva Business Network is of great value to your <br />
          organization. The network gives you a single platform to continue to
          train your staff members in selected areas of technology for <br />{" "}
          free through our well designed and stacked masterclasses.
        </span>
        {/* <Logo src={house} /> */}
      </Right>
      <Left src={circle2} />
    </Container>
  );
};

export default Hubs;

const Logo = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 500px;
  background-color: slategrey;
`;
const Right = styled.div`
  h1 {
    font-size: 54px;
    font-weight: 700;
    line-height: 60px;
    color: rgb(10, 22, 39);
    margin: 0;
  }

  span {
    line-height: 25px;
    font-size: 15px;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.6);
  }
  width: 45%;
`;
const Left = styled.img`
  width: 32%;
  height: 75%;
  object-fit: cover;
  border-radius: 10px;
`;
const Pic = styled.div``;
