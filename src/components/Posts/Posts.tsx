import { component$, useContext } from "@builder.io/qwik";

import {
  CurrentPageContext,
  PostsContext,
  SearchInputContext,
} from "~/context";
import type { PostType, StateType } from "~/utils/types";
import Post from "../Post/Post";
import { LIMIT, PAGE } from "~/utils/constants";

import { posts as postsClass } from "./Posts.css";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const searchInput = useContext(SearchInputContext);
  const currentPage = useContext(CurrentPageContext);
  const state = useContext(PostsContext) as StateType;

  const {
    url: { pathname },
  } = useLocation();
  const page = {
    "/create/": PAGE.Create,
    "/update/": PAGE.Update,
    "/delete/": PAGE.Delete,
  }[pathname];

  return (
    <div class={postsClass}>
      {searchInput.value
        ? state.posts.value
            .filter((p: PostType) => p.title.includes(searchInput.value))
            .map((p: PostType) => (
              <Post
                key={p.id}
                title={p.title}
                body={p.body}
                id={p.id}
                page={page}
              />
            ))
        : state.posts.value
            .slice(
              (currentPage.value - 1) * LIMIT,
              (currentPage.value - 1) * LIMIT + LIMIT
            )
            .map((p: PostType) => (
              <Post
                key={p.id}
                title={p.title}
                body={p.body}
                id={p.id}
                page={page}
              />
            ))}
    </div>
  );
});
