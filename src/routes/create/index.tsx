import {
  $,
  component$,
  useContext,
  useSignal,
  useStore,
} from "@builder.io/qwik";

import { container, error, button } from "./index.css";
import { createPost } from "~/utils/api";
import { TOTAL_COUNT } from "~/utils/constants";
import { LocalPostsNumberContext, PostsContext } from "~/context";
import type { StateType } from "~/utils/types";
import Container from "~/components/Container/Container";

export default component$(() => {
  const localPostsNumber = useContext(LocalPostsNumberContext);
  const titleInput = useSignal("");
  const bodyTextArea = useSignal("");
  const errors = useStore({
    title: "",
    body: "",
  });

  const state = useContext(PostsContext) as StateType;

  const handleSubmit = $(async () => {
    const res = await createPost({
      title: titleInput.value,
      body: bodyTextArea.value,
    });
    const newPost = {
      ...res,
      id: (TOTAL_COUNT + localPostsNumber.value + 1).toString(),
    };
    state.posts.value = [...state.posts.value, newPost];
    localPostsNumber.value++;
  });

  return (
    <Container>
      <form class={container}>
        <h2>Create a new Post</h2>
        <input
          type="text"
          placeholder="Title"
          required
          onInput$={$((e: any) => (titleInput.value = e.target.value))}
        />
        {errors.title && <span class={error}>{errors.title}</span>}
        <textarea
          name="body"
          id=""
          cols={30}
          rows={5}
          required
          onInput$={$((e: any) => (bodyTextArea.value = e.target.value))}
        ></textarea>
        {errors.title && <span class={error}>{errors.title}</span>}
        <button class={button} preventdefault:click onClick$={handleSubmit}>
          Create
        </button>
      </form>
    </Container>
  );
});
