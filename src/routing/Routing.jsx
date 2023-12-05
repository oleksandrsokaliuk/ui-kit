import { Route, Routes } from "react-router-dom";
import Buttons from "../buttons/Buttons";
import Menus from "../menus/Menus";
import Main from "../main/Main";
import Cards from "../cards/Cards";
import Footers from "./../footers/Footers";
import SideBars from "../sidebars/SideBars";
import Headers from "../headers/Headers";

const locations = {
  main: "main",
  buttons: "/buttons",
  menus: "/menus",
  cards: "/cards",
  footers: "/footers",
  sidebars: "/sidebars",
  headers: "/headers",
};

export const routes = [
  {
    path: locations.buttons,
    component: Buttons,
    name: "Buttons",
    exact: true,
  },
  {
    path: locations.menus,
    component: Menus,
    name: "Menus",
    exact: true,
  },
  {
    path: locations.main,
    component: Main,
    name: "Main",
    exact: true,
  },
  {
    path: locations.cards,
    component: Cards,
    name: "Cards",
    exact: true,
  },
  {
    path: locations.footers,
    component: Footers,
    name: "Footers",
    exact: true,
  },
  {
    path: locations.sidebars,
    component: SideBars,
    name: "SideBars",
    exact: true,
  },
  {
    path: locations.headers,
    component: Headers,
    name: "Headers",
    exact: true,
  },
];

export const Routing = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.name}
            element={<route.component />}
          />
        ))}
      </Routes>
    </>
  );
};
