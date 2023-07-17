import { globalStyle } from "@vanilla-extract/css";

globalStyle("button", {
  fontSize: "1rem",
  backgroundColor: "var(--cloud-burst)",
  border: "none",
  borderRadius: ".125rem",
  color: "white",
  padding: ".5rem 1rem",
  cursor: "pointer",
  transition: "all .15s",
});

globalStyle("input, textarea", {
  padding: ".5rem 1rem",
  borderWidth: ".0625rem",
  borderStyle: "solid",
  borderColor: "var(--cloud-burst)",
  borderRadius: ".125rem",
});
