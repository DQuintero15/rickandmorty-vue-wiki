<template>
  <article class="bg-primary p-4">
    <search @buscar="getCharacters" />
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <div v-for="character in characters" :key="character.id">
        <character-card
          :name="character.name"
          :img_url="character.image"
          :status="character.status"
          :gender="character.gender"
        />
      </div>
    </div>
  </article>
</template>

<script>
import axios from "axios";
import { CharacterCard, Search } from "../components";
export default {
  components: {
    CharacterCard,
    Search,
  },
  data: () => ({
    characters: [],
  }),
  created() {
    this.getCharacters();
  },
  methods: {
    async getCharacters(name = "") {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      const { results } = data;
      this.characters = results;
    },
  },
};
</script>

<style>
</style>