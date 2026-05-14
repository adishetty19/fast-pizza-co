import { createBrowserRouter, RouterProvider } from "react-router";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import CreateOrder from "./components/order/CreateOrder";
import Order from "./components/order/Order";
import AppLayout from "./ui/AppLayout/AppLayout";
import Home from "./ui/Home/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
