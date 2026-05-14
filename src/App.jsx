import { createBrowserRouter } from "react-router";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import CreateOrder from "./components/order/CreateOrder";
import Order from "./components/order/Order";

const router = createBrowserRouter([
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
]);

export default function App() {
  return <h2>Hello</h2>;
}
