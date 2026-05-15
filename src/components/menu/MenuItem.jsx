import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button/Button";
import { formatCurrency } from "../../utilities/helpers";
import { addItem, getQuantityId } from "../cart/cartSlice";
import UpdateQuantity from "../cart/UpdateQuantity";
import DeleteItem from "../cart/DeleteItem";

export default function MenuItem({ menuItemData }) {
  const dispatch = useDispatch();
  const { id, imageUrl, ingredients, name, soldOut, unitPrice } = menuItemData;
  const unitPrize = unitPrice * 30;

  const quantityId = useSelector(getQuantityId(id));
  const quantity = quantityId > 0;

  console.log(quantityId);

  function handleAddCart(e) {
    e.preventDefault();
    const addCart = {
      pizzaId: id,
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

          {quantity && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateQuantity pizzaId={id} quantity={quantityId} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !quantity && (
            <Button type="small" onClick={handleAddCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
