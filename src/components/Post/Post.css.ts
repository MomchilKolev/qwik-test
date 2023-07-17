import { style } from "styled-vanilla-extract/qwik";

export const post = style({
  height: "max-content",
  padding: "2rem",
  boxShadow:
    "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
  display: "grid",
  gridTemplateRows: "1fr 1fr max-content",
  gap: "1rem",
});

export const editButton = style({
  backgroundColor: "var(--violet-red)",
});

export const deleteButton = style({
  backgroundColor: "var(--saffron-mango)",
  color: "#345",
});
