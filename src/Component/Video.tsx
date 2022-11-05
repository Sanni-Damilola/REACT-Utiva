import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import playvideo from "./store/short.mp4";

const Video = () => {
  const [count, setcount] = useState<number>(0);

  const one: string[] = [" rgb(10, 22, 39)", "rgb(8, 19, 31)", "rgb(6,12,20)"];
  const two: string[] = ["rgb(6,12,20)", "rgb(10, 22, 39)", "rgb(8, 19, 31)"];
  const three: string[] = [
    "rgb(8, 19, 31)",
    "rgb(6,12,20)",
    " rgb(10, 22, 39)",
  ];

  const ref1: any = useRef();
  const ref2: any = useRef();
  const ref3: any = useRef();

  //   useEffect(() => {
  //     ref1.current.style.backgroundColor = one[count % one.length];
  //     ref2.current.style.backgroundColor = two[count % two.length];
  //     ref3.current.style.backgroundColor = three[count % three.length];
  //   });

  //   useEffect(() => {
  //     setInterval(() => {
  //       setcount((el) => el + 0.5);
  //     }, 2000);
  //   }, []);

  console.log(count);

  return (
    <Container>
      <Play autoPlay={true} muted playsInline loop={true} src={playvideo} />
      <Text>
        <h1>
          Break Into Tech <br /> Faster
        </h1>
        <pre>
          Get Into Tech in <span>6 Months</span> <br /> become the best of
          yourself{" "}
        </pre>
        <button>Start Now!</button>
      </Text>
      <Lines>
        <One ref={ref1}>
          <i>trust the process!</i>
        </One>
        <Two ref={ref2}></Two>
      </Lines>
    </Container>
  );
};

export default Video;

const Lines = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  display: grid;
  grid-template-columns: 55% 45%;
  top: 100%;
`;
const One = styled.div`
  height: 80%;
  background-color: rgb(8, 19, 31);
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: white;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
const Two = styled.div`
  height: 80%;
  background-color: rgb(10, 22, 39);
  color: transparent;
`;


const Container = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Play = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const Text = styled.div`
  text-transform: capitalize;
  h1 {
    font-size: 70px;
    font-weight: 800;
    color: white;
    margin: 0;
  }

  pre {
    font-size: 20px;
  }

  span {
    color: #fbaf1b;
    font-weight: bolder;
    font-size: 21px;
  }
  position: absolute;
  color: white;
  text-align: center;

  button {
    width: 160px;
    padding: 17px 30px;
    background-color: #fbaf1b;
    font-weight: bold;
    font-size: 15px;
    color: white;
    border: 0;
    outline: none;
    border-radius: 6px;
    cursor: pointer;

    :hover {
      background-color: transparent;
      border: 1px solid #fbaf1b;
      transform: scale(0.9);
      transition: all 400ms;
      color: #fbaf1b;
    }
  }
`;
