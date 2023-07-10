import { createRouter, createWebHistory } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/fruits",
    name: "fruits",
    component: () => import("./components/FruitsList")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddFruits")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;