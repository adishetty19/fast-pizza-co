import LinkButton from "../../ui/LinkButton/LinkButton";
import Button from "../../ui/Button/Button";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 360,
    totalPrice: 720,
  },
  {
    pizzaId: 6,
    name: "vegetale",
    quantity: 1,
    unitPrice: 280,
    totalPrice: 280,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mishroom",
    quantity: 1,
    unitPrice: 320,
    totalPrice: 320,
  },
];

export default function Cart() {
  const cartData = fakeCart;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}
