import { component$ } from "@builder.io/qwik";

import Pagination from "~/components/Pagination/Pagination";
import Posts from "~/components/Posts/Posts";
import Container from "~/components/Container/Container";
import SearchInput from "~/components/SearchInput/SearchInput";

export default component$(() => {
  return (
    <Container>
      <SearchInput />
      <Pagination />
      <Posts />
    </Container>
  );
});
