import { Outlet, useNavigation } from "react-router";
import CartOverview from "../../components/cart/CartOverview";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { getQuantity } from "../../components/cart/cartSlice";

export default function AppLayout() {
  const navigation = useNavigation();
  const quantity = useSelector(getQuantity);

  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      {quantity > 0 && <CartOverview />}
    </div>
  );
}
