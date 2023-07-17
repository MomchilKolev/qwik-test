import { style } from "styled-vanilla-extract/qwik";

export const pagination = style({
  justifySelf: "flex-end",
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
});

export const button = style({
  fontSize: "1rem",
  backgroundColor: "var(--cloud-burst)",
  border: "none",
  borderRadius: ".125rem",
  color: "white",
  padding: ".5rem 1rem",
  cursor: "pointer",
  transition: "all .15s",
  selectors: {
    "&:hover": {
      backgroundColor: "var(--cloud-burst-dark)",
    },
    "&.update": {
      backgroundColor: "var(--violet-red)",
    },
    "&.delete": {
      backgroundColor: "var(--saffron-mango)",
      color: "var(--cloud-burst)",
    },
  },
});
