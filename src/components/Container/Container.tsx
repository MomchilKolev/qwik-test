import { Slot, component$ } from "@builder.io/qwik";

import { container } from "./Container.css";

export default component$(() => {
  return (
    <section class={container}>
      <Slot />
    </section>
  );
});
