import { type Signal, createContextId } from "@builder.io/qwik";

export const PostsContext = createContextId<object>("posts");

export const LocalPostsNumberContext = createContextId<Signal<number>>("local");

export const CurrentPageContext =
  createContextId<Signal<number>>("currentPage");

export const DeletePostsNumberContext =
  createContextId<Signal<number>>("deletePostsNumber");

export const SearchInputContext =
  createContextId<Signal<string>>("searchInput");
