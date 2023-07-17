import {
  component$,
  Slot,
  useContextProvider,
  useSignal,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import Nav from "~/components/Nav/Nav";

import {
  CurrentPageContext,
  DeletePostsNumberContext,
  LocalPostsNumberContext,
  PostsContext,
  SearchInputContext,
} from "~/context";
import type { PostsResponseType, StateType } from "~/utils/types";
import { getPosts } from "~/utils/api";

export const onGet: RequestHandler = async ({ url, redirect }) => {
  if (!["/create/", "/read/", "/update/", "/delete/"].includes(url.pathname))
    throw redirect(302, "/read/");
};

export default component$(() => {
  const posts = useSignal([]);
  const lastPage = useSignal(1);
  const currentPage = useSignal(1);
  const localPostsNumber = useSignal(0);
  const deletedPostsNumber = useSignal(0);
  const searchInput = useSignal("");

  const state = useStore<StateType>(
    {
      posts,
      lastPage,
    },
    { deep: true }
  );

  useContextProvider(PostsContext, state);
  useContextProvider(CurrentPageContext, currentPage);
  useContextProvider(LocalPostsNumberContext, localPostsNumber);
  useContextProvider(DeletePostsNumberContext, deletedPostsNumber);
  useContextProvider(SearchInputContext, searchInput);

  useTask$(async () => {
    if (state.posts.value.length) return;
    const res = (await getPosts(currentPage.value)) as PostsResponseType;
    state.posts.value = [...state.posts.value, ...res.posts.data];
  });

  return (
    <main>
      <Nav />
      <Slot />
    </main>
  );
});
