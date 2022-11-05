import React from "react";
import styled from "styled-components";

interface props {
  text: string;
  heg: string;
}

const Global_button: React.FC<props> = ({ text, heg }) => {
  return (
    <Container>
      <Button heg={heg}>{text}</Button>
    </Container>
  );
};

export default Global_button;

const Container = styled.div``;
const Button = styled.button<{ heg: string }>`
  padding: ${({ heg }) => (heg ? "12px" : "20px")} 23px;
  background-color: rgb(251, 175, 27);
  border: 0;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  text-transform: capitalize;
`;
