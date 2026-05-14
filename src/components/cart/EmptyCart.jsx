import { Link } from "react-router";

export default function EmptyCart() {
  return (
    <div>
      <Link to="/menu">&larr; back to menu</Link>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}
