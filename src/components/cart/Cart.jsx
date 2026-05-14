import { Link } from "react-router";

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
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}
