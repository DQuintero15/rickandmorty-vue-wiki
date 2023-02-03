import { createRouter, createWebHistory } from "vue-router";
import { HomeView } from "../views";
import { CharactersView } from "../views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/characters",
      name: "characters",
      component: CharactersView,
    },
  ],
});

export default router;
