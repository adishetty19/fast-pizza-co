import { createBrowserRouter, RouterProvider } from "react-router";
import Menu, { loader as menuLoader } from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import CreateOrder, {
  action as orderAction,
} from "./components/order/CreateOrder";
import Order, { loader as orderLoader } from "./components/order/Order";
import AppLayout from "./ui/AppLayout/AppLayout";
import Home from "./ui/Home/Home";
import Error from "./ui/Error/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        loader: menuLoader,
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        action: orderAction,
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        loader: orderLoader,
        element: <Order />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
