import Home from "./Home";
import VBucks from "./Vbucks";

export const routes = [
  {
    id: 0,
    link: "/",
    component: Home,
  },
  {
    id: 1,
    link: "/vbucks",
    component: VBucks,
  }
];

export const Nav_Routes = [
  {
    id: 0,
    title: "Discover",
    link: "/"
  },
  {
    id: 1,
    title: "my library",
    link: "/my-library",
  },
  {
    id: 2,
    title: "create",
    link: "/create",
  },
  {
    id: 3,
    title: "v-bucks",
    link: "/vbucks",
  },
];
