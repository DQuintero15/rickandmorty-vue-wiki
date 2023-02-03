<template>
  <nav class="sticky">
    <div class="logo_container">
      <RouterLink to="/">
        <img :src="logo_url" />
      </RouterLink>
    </div>
    <div class="options_container">
      <RouterLink class="link" to="/characters">Personajes</RouterLink>
      <RouterLink class="link suscription" to="/">Suscríbete ahora</RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png",
    };
  },
};
</script>

<style scoped>
.suscription {
  @apply bg-light_primary hover:bg-white hover:text-black;
}

.link {
  @apply text-white font-medium p-3  rounded-full uppercase text-xs mx-2 focus:outline-none justify-end focus:ring focus:ring-ligh_blue transition delay-150;
}
.logo_container {
  @apply w-28 md:w-44 lg:w-52;
}
nav {
  @apply flex w-full align-middle items-center p-3 space-x-5 bg-primary justify-between px-2;
}
</style>