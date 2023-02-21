import styled, { createGlobalStyle } from "styled-components";
import { primaryDarkColor, primaryColor } from "../config/color";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

html,body,#root{
  height: 100%;
}

body{
  font-family: sans-serif;
  background-color: ${primaryDarkColor};
}

button{
  cursor: pointer;
}

a{
  text-decoration: none;
}

ul{
  list-style: none;
}
`;

export const Container = styled.div`
  max-width: 360px;
  background: #a8a8b3;
  margin: 30px auto;
  padding: 30px;
  border-radius: 5px;
  border-radius: 0 0 10px rgba(0, 0, 0, 0.1);
`;
