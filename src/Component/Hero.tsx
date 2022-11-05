import React from "react";
import styled from "styled-components";
import { BsLightningChargeFill } from "react-icons/bs";
import bunbble from "./store/bundle198a3754.png";
import move from "./store/move.png";
import bambble from "./store/bamboo05accedd.png";
import bunbteamptble from "./store/teamapt18b44ce9.png";
import thrive from "./store/thrive_agric.e92719e7.jpeg";
import pig from "./store/pig.png";
import bunprospa from "./store/prospa1eecfe18.png";
import paystack from "./store/paystack5577e2b0.png";
import palmplay from "./store/palmpayf4ba7c46.jpeg";
import opay from "./store/opay1085497c.webp";
import nomba from "./store/nombae2ea1ed9.jpeg";
import mono from "./store/monob4cdd575.jpeg";
import last from "./store/lastimg.png";
import kuda from "./store/KudaBank3e811ec3.png";
import flutter from "./store/flutterwave6e97705a.png";
import credal from "./store/credpal188daebd.png";
import cowry from "./store/cowrywisecc1949d4.png";
import team from "./store/teamapt18b44ce9.png";
import prospa from "./store/prospa1eecfe18.png";
import auto from "./store/auto.png";

const Hero = () => {
  return (
    <Container>
      <Div1>Our Talents Work With Many of these Leading Tech Companies</Div1>
      <Div2>
        <div>
          <Image src={bunbble} />
          <Image src={move} />
          <Imagedff src={flutter} />
          <Image src={paystack} />
          <Imagedff src={mono} />
          <Image src={cowry} />
          <Image src={bambble} />
          <Imagedff src={nomba} />
          <Image src={team} />
        </div>
        <div>
          <Image src={prospa} />
          <Image src={pig} />
          <Imagedff src={thrive} />
          <Image src={credal} />
          <Image src={auto} />
          <Imagedff src={palmplay} />
          <Image src={kuda} />
          <Image src={opay} />
          <Image src={last} />
        </div>
      </Div2>
      <Div3>
        <div>
          <span>NEW</span>
          <Icon>
            <BsLightningChargeFill />
          </Icon>
        </div>
        <span>
          HP Inc to support Utiva's mission to empower African women.
          <span>Read more</span>
        </span>
      </Div3>
    </Container>
  );
};

export default Hero;

const Image = styled.img`
  object-fit: contain;
  width: 100px;
  height: 70px;
  margin: 10px;
`;
const Imagedff = styled.img`
  object-fit: cover;
  width: 140px;
  height: 30px;
  margin: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 270px;
  margin-top: 160px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 200, 61);
`;

const Div1 = styled.div`
  margin-left: 56px;
  font-size: 19px;
  font-weight: 500;
  color: rgb(0, 0, 0, 0.8);
`;
const Div2 = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;

  div {
    width: 90%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
  }
`;
const Div3 = styled.div`
  margin-top: 13px;
  margin-left: 56px;
  width: 80%;
  display: flex;
  div {
    width: 60px;
    display: flex;
    font-size: 12px;
    height: 33px;
    border-radius: 17px;
    /* background-image: linear-gradient(to right, red , yellow); */
    display: flex;
    background-color: rgb(43, 183, 116);
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    span {
      color: white;
      margin-bottom: 7px;
      margin-left: 20px;
      font-weight: 500;
    }
  }

  span {
    font-weight: 400;
    color: black;
    font-size: 13px;
    margin-top: 7px;

    span {
      color: blue;
      margin-left: 2px;
      font-size: 13px;
      font-weight: 700;
    }
  }
`;
