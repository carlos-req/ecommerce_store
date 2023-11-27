import Layout from "../Layout";
import Home from "../scenes/home/Home";
import Error from "../Error";
import { Route, createRoutesFromElements } from "react-router-dom";

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="*" element={<Error />} />
  </Route>
);
