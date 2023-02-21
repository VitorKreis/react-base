import React from "react";

import { Title, Paragraf } from "./styled";
import { Container } from "../../../styles/GlobalStyles";

const hasName = "Jose";

export default function Login() {
  return (
    <Container>
      <Title hasName>
        Ola
        <a>{hasName}</a>
      </Title>

      <Paragraf>Qualquer coisa do login</Paragraf>
    </Container>
  );
}
