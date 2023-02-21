import styled from "styled-components";
import { primaryColor } from "../../config/color";

export const Nav = styled.nav`
  display: flex;
  background-color: ${primaryColor};
  padding: 22px;
  align-items: center;
  justify-content: center;
  margin: auto;

  a {
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin: 0 12px 0 0;
  }
`;
