import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

import { header, h1, nav, link, create, read, update, del } from "./Nav.css";

export default component$(() => {
  const {
    url: { pathname },
  } = useLocation();
  const getBorder = (pathname: string) => pathname.replace(/\//g, "");
  return (
    <header class={`${header} ${getBorder(pathname)}`}>
      <h1 class={h1}>Q</h1>
      <nav class={nav}>
        <Link class={`${link} ${create}`} href="/create">
          C
        </Link>
        <Link class={`${link} ${read}`} href="/read">
          R
        </Link>
        <Link class={`${link} ${update}`} href="/update">
          U
        </Link>
        <Link class={`${link} ${del}`} href="/delete">
          D
        </Link>
      </nav>
    </header>
  );
});
