import { $, component$, useContext } from "@builder.io/qwik";
import { CurrentPageContext, PostsContext } from "~/context";
import { getPosts } from "~/utils/api";
import { LIMIT, TOTAL_COUNT } from "~/utils/constants";
import type { PostsResponseType, StateType } from "~/utils/types";

import { pagination, button } from "./Pagination.css";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const {
    url: { pathname },
  } = useLocation();

  const currentPage = useContext(CurrentPageContext);
  const state = useContext(PostsContext) as StateType;

  const nextPage = $(async () => {
    if (currentPage.value * LIMIT >= TOTAL_COUNT) return;

    currentPage.value++;

    if (state.lastPage.value >= currentPage.value) return;

    const res = (await getPosts(currentPage.value)) as PostsResponseType;
    state.posts.value = [...state.posts.value, ...res.posts.data];
    state.lastPage.value++;
  });

  const prevPage = $(() => {
    if (currentPage.value <= 1) return;
    currentPage.value--;
  });

  return (
    <div class={pagination}>
      <button
        class={`${button} ${pathname.replace(/\//g, "")}`}
        onClick$={prevPage}
      >
        Previous
      </button>
      <span>{currentPage}</span>
      <button
        class={`${button} ${pathname.replace(/\//g, "")}`}
        onClick$={nextPage}
      >
        Next
      </button>
    </div>
  );
});
