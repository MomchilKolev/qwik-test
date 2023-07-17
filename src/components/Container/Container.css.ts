import { style } from "styled-vanilla-extract/qwik";

export const container = style({
  padding: "1rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2rem",
  justifyContent: "center",
});
