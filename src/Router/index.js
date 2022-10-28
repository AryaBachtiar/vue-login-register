import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../view/Home.vue";
import Product from "../view/Product.vue";
import Detail from "../view/Detail.vue";
import Cart from "../view/Cart.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: Login,
  },
  {
    path: "/register",
    name: "Registerpage",
    component: Register,
  },

  {
    path: "/home",
    name: "HomePage",
    component: Home,
  },
  {
    path: "/product",
    name: "ProductView",
    component: Product,
  },
  {
    path: "/detail",
    name: "DetailVue",
    component: Detail,
  },
  {
    path: "/cart",
    name: "CartPage",
    component: Cart,
  },
];
// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// });

const router = new Router({
  routes,
  mode: "history",
});

export default router;
