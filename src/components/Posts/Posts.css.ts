import { style } from "styled-vanilla-extract/qwik";

export const posts = style({
  gridColumn: "1/3",
  display: "grid",
  gridGap: "1rem",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
    },
  },
});
