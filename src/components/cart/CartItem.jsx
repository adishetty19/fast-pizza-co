import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button/Button";
import { formatCurrency } from "../../utilities/helpers";
import { deleteItem, getQuantity } from "./cartSlice";
import EmptyCart from "./EmptyCart";

export default function CartItem({ cartDataItem }) {
  const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice } = cartDataItem;

  function handleDeleteCart(e) {
    e.preventDefault();
    dispatch(deleteItem(pizzaId));
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity} &times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={handleDeleteCart}>
          Delete
        </Button>
      </div>
    </li>
  );
}
