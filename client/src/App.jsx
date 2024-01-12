import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "./routes/routeConfig";

const router = createBrowserRouter(routes);

function App() {
  return (
    <main className="app">
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}

export default App;
