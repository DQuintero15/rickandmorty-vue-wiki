<template>
  <div class="shadow-md w-fit h-fit block text-center rounded-2xl bg-white">
    <img
      :src="img_url"
      draggable="false"
      class="rounded-t-2xl"
      loading="lazy"
    />
    <div class="p-2 space-y-1">
      <h1 class="font-medium text-xs md:text-base lg:text-lg">{{ name }}</h1>
      <h1>
        Estado: <span :class="status">{{ status }}</span>
      </h1>
      <h1>
        Género: <span class="text-sm">{{ gender }}</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { required: true, type: String },
    img_url: { required: true, type: String },
    status: { required: true, type: String },
    gender: { required: true, type: String },

  },
};
</script>

<style scoped>
.Dead,
.Alive,
.unknown {
  @apply p-1 text-white px-2 rounded-3xl font-medium text-sm;
}

.Alive {
  @apply bg-green-600;
}

.Dead {
  @apply bg-red-600;
}

.unknown {
  @apply bg-gray-600;
}
</style>