import { Link } from "react-router";

export default function CartOverview() {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>&#8377; 330</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
