// Test ID: IIDSAT

import { useLoaderData } from "react-router";
import { getOrder } from "../../services/apiRestaurent";

// const order = {
//   id: "ABCDEF",
//   customer: "Aditya",
//   phone: "123456789",
//   address: "Thane, Maharashtra, India",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantithy: 3,
//       unitPrice: 330,
//       totalPrice: 990,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantithy: 1,
//       unitPrice: 370,
//       totalPrice: 370,
//     },
//     {
//       pizzaId: 5,
//       name: "Divola",
//       quantithy: 2,
//       unitPrice: 350,
//       totalPrice: 700,
//     },
//   ],
//   position: "",
//   orderPrice: 2060,
//   priorityPrice: 120,
// };

export default function Order() {
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = estimatedDelivery;

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>
      </div>

      <div className="space-x-2">
        <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
          Priority
        </span>
        <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
          order
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">Only estimated minutes left 😃</p>
        <p className="font-medium">Order should have arrived</p>
        <p className="text-xs text-stone-500">
          Esitmated delivery: estimatedDelivery
        </p>
      </div>

      <div lassName="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">Price pizza: </p>
        <p className="text-sm font-medium text-stone-600">Price priority: </p>
        <p className="font-bold">To pay on delivery: </p>
      </div>
    </div>
  );
}
