import { useSelector } from "react-redux";
import { formatCurrency } from "../../utilities/helpers";
import DeleteItem from "./DeleteItem";
import UpdateQuantity from "./UpdateQuantity";
import { getQuantityId } from "./cartSlice";

export default function CartItem({ cartDataItem }) {
  const { pizzaId, name, quantity, totalPrice } = cartDataItem;
  const quantityId = useSelector(getQuantityId(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity} &times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity pizzaId={pizzaId} quantity={quantityId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}
