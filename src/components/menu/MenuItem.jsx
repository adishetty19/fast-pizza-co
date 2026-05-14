import Button from "../../ui/Button/Button";

export default function MenuItem() {
  return (
    <li className="flex gap-4 py-2">
      <img src="" alt="name" className={`h-24`} />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">name</p>
        <p className="text-sm capitalize italic text-stone-500">ingredients</p>
        <div className="mt-auto flex items-center justify-between">
          <p>unitPrice</p>
          <p>Sold out</p>

          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}
