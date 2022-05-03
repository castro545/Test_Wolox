import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Beneficios from "../components/Beneficios.vue";
import Pokemon from "../components/Pokemon/Pokemon.vue";
import Layout from "../layout/Layout.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: Layout,
    },
  },
  {
    path: "/Beneficios",
    name: "Beneficios",
    component: Beneficios,
  },
  {
    path: "/Pokemon",
    name: "Pokemon",
    component: Pokemon,
    meta: {
      layout: Layout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
