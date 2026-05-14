import LinkButton from "../../ui/LinkButton/LinkButton";
import Button from "../../ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, getQuantity } from "./cartSlice";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.userName);
  const itemsQuantity = useSelector(getQuantity);
  const cartData = useSelector((state) => state.cart.cart);
  console.log(cartData);

  function handleClearCart(e) {
    e.preventDefault();
    dispatch(clearCart());
  }

  if (itemsQuantity === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cartData.map((cartDataItem) => (
          <CartItem key={cartDataItem.pizzaId} cartDataItem={cartDataItem} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}
