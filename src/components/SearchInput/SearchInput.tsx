import { component$, useContext } from "@builder.io/qwik";
import { SearchInputContext } from "~/context";

export default component$(() => {
  const searchInput = useContext(SearchInputContext);
  return (
    <input
      type="text"
      placeholder="Search across posts"
      onInput$={(e: any) => (searchInput.value = e?.target?.value)}
    />
  );
});
