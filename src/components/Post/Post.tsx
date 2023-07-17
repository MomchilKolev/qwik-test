import { $, component$, useContext, useSignal } from "@builder.io/qwik";

import { post as postClass, editButton, deleteButton } from "./Post.css";
import { PAGE, TOTAL_COUNT } from "~/utils/constants";
import { deletePost, updatePost } from "~/utils/api";
import { PostsContext } from "~/context";
import type { PostType, StateType } from "~/utils/types";

interface PostProps {
  id: string;
  title: string;
  body: string;
  page?: PAGE;
}

export default component$<PostProps>((props) => {
  const state = useContext(PostsContext) as StateType;
  const editable = useSignal(false);
  const titleInput = useSignal(props.title);
  const bodyInput = useSignal(props.body);

  // Should be replaced, but for now this gets it to update
  const post = state.posts.value.find((p: any) => p.id === props.id);

  const handleClick = $(async () => {
    if (props.page === PAGE.Update) {
      if (editable.value) {
        const post =
          +props.id <= TOTAL_COUNT
            ? await updatePost({
                id: props.id,
                title: titleInput.value,
                body: bodyInput.value,
              })
            : {
                id: props.id,
                title: titleInput.value,
                body: bodyInput.value,
              };
        const postIndex = state.posts.value.findIndex(
          (p: PostType) => p.id === post.id
        );
        state.posts.value = state.posts.value
          .slice(0, postIndex)
          .concat(post, state.posts.value.slice(postIndex + 1));
      }
      editable.value = !editable.value;
    } else if (props.page === PAGE.Delete) {
      await deletePost(props.id);
      const postIndex = state.posts.value.findIndex(
        (p: PostType) => p.id === props.id
      );
      state.posts.value = state.posts.value
        .slice(0, postIndex)
        .concat(state.posts.value.slice(postIndex + 1));
    }
  });

  return (
    <div class={postClass}>
      {editable.value ? (
        <input
          class={titleInput}
          type="text"
          value={titleInput.value}
          onInput$={(e: any) => (titleInput.value = e.target.value)}
        />
      ) : (
        <h3>{post.title}</h3>
      )}
      {editable.value ? (
        <textarea
          onInput$={(e: any) => (bodyInput.value = e.target.value)}
          rows={6}
          value={bodyInput.value}
        ></textarea>
      ) : (
        <p>{post.body}</p>
      )}
      {props.page === PAGE.Update ? (
        <button class={editButton} onClick$={handleClick}>
          {editable.value ? "Update" : "Edit"}
        </button>
      ) : null}
      {props.page === PAGE.Delete ? (
        <button class={deleteButton} onClick$={handleClick}>
          Delete
        </button>
      ) : null}
    </div>
  );
});
