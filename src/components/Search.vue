<template>
  <form class="p-4 my-4 space-x-5 text-lg bg-light_primary rounded-xl">
    <input
      type="text"
      v-model="name"
      class="rounded-lg p-2 text-base from-neutral-600 w-96"
      placeholder="Nombre de personaje..."
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  watch: {
    name(name) {
      setTimeout(() => {
        this.$emit("buscar", name);
      }, 100);
    },
  },
};
</script>

<style>
</style>