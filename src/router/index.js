import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Beneficios from "../components/Beneficios.vue";
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
    meta: {
      layout: Layout,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
