import Button from "../../ui/Button/Button";

export default function CartItem() {
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">quantity &times; name</p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">totalPrice</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}
