import { useSelector } from "react-redux";
import { Link } from "react-router";
import { formatCurrency } from "../../utilities/helpers";
import { getQuantity, getTotalPrice } from "./cartSlice";

export default function CartOverview() {
  const quantity = useSelector(getQuantity);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>
          {quantity} {quantity === 1 || quantity === 0 ? "pizza" : "pizzas"}
        </span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
