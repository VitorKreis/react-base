import styled from "styled-components";

export const Title = styled.h1`
  a {
    color: ${(props) => (props.hasName ? "blue" : "white")};
  }
`;

export const Paragraf = styled.p`
  color: blueviolet;
  font-size: 45px;
`;
