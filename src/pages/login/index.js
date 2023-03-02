import React from "react";

import { toast } from "react-toastify";
import { Title, Paragraf } from "./styled";
import { Container } from "../../styles/GlobalStyles";

export default function Login() {
  return (
    <Container>
      <Title hasName>Ola</Title>

      <Paragraf>Qualquer coisa do login</Paragraf>
    </Container>
  );
}
