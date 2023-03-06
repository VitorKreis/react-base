import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { decremeant, increment } from "../../store/Counter";

import { Title, Paragraf } from "./styled";
import { Container } from "../../styles/GlobalStyles";

export default function Login() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch;

  function handlePlus(e) {
    e.preventDefault();
    dispatch(increment());
  }
  return (
    <Container>
      <Title>Ola</Title>
      <Paragraf>Qualquer coisa do login</Paragraf>

      <button type="button" onClick={handlePlus}>
        +
      </button>
      <span>{count}</span>

      <button type="button" onClick={() => dispatch(decremeant())}>
        -
      </button>
    </Container>
  );
}
