import { formatCurrency } from "../../utilities/helpers";

export default function OrderItem({ orderDataItem }) {
  const { quantity, name, totalPrice } = orderDataItem;
  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity} &times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}
