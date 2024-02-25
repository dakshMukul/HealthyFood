import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./pages/Error";
import RestMenu from "./components/ReastMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";

const Grocery = lazy(() => import("./pages/Grocery"));

if (Grocery === null) {
}

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Heading />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <ContactMe />,
      },
      {
        path: "/restaurants/:id",
        element: <RestMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
