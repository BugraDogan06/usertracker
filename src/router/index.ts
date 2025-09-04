import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import UserList from "@/views/UserList.vue";
import UserDetail from "@/views/UserDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/users",
    name: "UserList",
    component: UserList,
  },
  {
    path: "/user/:id?",
    name: "UserDetail",
    component: UserDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
