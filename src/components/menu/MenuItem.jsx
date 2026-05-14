import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button/Button";
import { formatCurrency } from "../../utilities/helpers";
import { addItem } from "../cart/cartSlice";

export default function MenuItem({ menuItemData }) {
  const dispatch = useDispatch();
  const { id, imageUrl, ingredients, name, soldOut, unitPrice } = menuItemData;
  const unitPrize = unitPrice;

  function handleAddCart(e) {
    e.preventDefault();
    const addCart = {
      pizaaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrize,
      totalPrice: unitPrize * 1,
    };

    console.log(addCart);
    dispatch(addItem(addCart));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-bold">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrize)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut && (
            <Button type="small" onClick={handleAddCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
