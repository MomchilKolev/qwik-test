import { style } from "styled-vanilla-extract/qwik";

export const container = style({
  gridColumn: "1/3",
  display: "grid",
  margin: "auto",
  textAlign: "center",
  gap: "1rem",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "40rem",
    },
  },
  "screen and (max-width: 767px)": {
    width: "100%",
  },
});

export const titleInput = style({
  padding: ".5rem 1rem",
  fontSize: "1rem",
});

export const bodyTextArea = style({
  padding: ".5rem 1rem",
  fontSize: "1rem",
});

export const error = style({
  color: "tomato",
});

export const button = style({
  backgroundColor: "var(--morning-glory)",
  color: "var(--cloud-burst)",
});
