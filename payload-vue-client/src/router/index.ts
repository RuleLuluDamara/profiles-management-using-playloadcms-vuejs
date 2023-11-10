import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SignIn from "@/views/SignInPage.vue";
import SignUp from "@/views/SignUpPage.vue";
import Profile from "@/views/ProfilePage.vue";
import AddProfile from "@/views/AddProfilePage.vue";
import EditProfile from "@/views/EditProfilePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/addprofile",
    name: "AddProfile",
    component: AddProfile,
  },
  {
    path: "/editprofile/:id",
    name: "editprofile",
    component: EditProfile,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
