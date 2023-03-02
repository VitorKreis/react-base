import React, { useEffect } from "react";

import { toast } from "react-toastify";
import { Title, Paragraf } from "./styled";
import { Container } from "../../styles/GlobalStyles";
import axios from "../../services/axios";

export default function Login() {
  /*
  useEffect(() => {
    async function getAlunos() {
      const res = await axios.get("/alunos");
      const { data } = res;

      console.log(data);
    }
    getAlunos();
  }, []);
  Aprendendo a utilizar useEffect e axios */
  return (
    <Container>
      <Title hasName>Ola</Title>
      <Paragraf>Qualquer coisa do login</Paragraf>
    </Container>
  );
}
