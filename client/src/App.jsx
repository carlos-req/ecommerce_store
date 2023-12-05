import { useEffect } from "react";
import {
  useLocation,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes/routeConfig";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const router = createBrowserRouter(routes);

function App() {
  return (
    <main className="app">
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </main>
  );
}

export default App;
