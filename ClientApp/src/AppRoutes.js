import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { GummieEarsApp } from "./components/GummieEarsApp";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/gummie-ears-app',
    element: <GummieEarsApp />
  }
];

export default AppRoutes;
