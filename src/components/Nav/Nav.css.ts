import { style } from "styled-vanilla-extract/qwik";

export const header = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  padding: "1rem 2rem",
  borderBottomWidth: ".5rem",
  borderBottomStyle: "solid",
  selectors: {
    "&.create": {
      borderColor: "var(--morning-glory)",
    },
    "&.read": {
      borderColor: "var(--cloud-burst)",
    },
    "&.update": {
      borderColor: "var(--violet-red)",
    },
    "&.delete": {
      borderColor: "var(--saffron-mango)",
    },
  },
  transition: "all .15s ease-out",
  "@media": {
    "screen and (max-width: 767px)": {
      width: "100%",
      position: "fixed",
      bottom: 0,
      padding: 0,
      gridTemplateColumns: "1fr",
    },
  },
});

export const h1 = style({
  "@media": {
    "screen and (max-width: 767px)": {
      display: "none",
    },
  },
});

export const nav = style({
  width: "100%",
  "@media": {
    "screen and (max-width: 767px)": {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    "screen and (min-width: 768px)": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
});

export const link = style({
  textDecoration: "none",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white",
  padding: "1rem 2rem",
  textAlign: "center",
  "@media": {
    "screen and (min-width: 768px)": {
      borderRadius: ".25rem",
    },
  },
});

export const create = style({
  backgroundColor: "var(--morning-glory)",
  color: "var(--cloud-burst)",
});

export const read = style({
  backgroundColor: "var(--cloud-burst)",
});

export const update = style({
  backgroundColor: "var(--violet-red)",
});

export const del = style({
  backgroundColor: "var(--saffron-mango)",
  color: "var(--cloud-burst)",
});
