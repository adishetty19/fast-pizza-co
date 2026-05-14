import { useSelector } from "react-redux";
import Button from "../../ui/Button/Button";
import { getCart } from "../cart/cartSlice";
import { Form, redirect } from "react-router";
import { createOrder } from "../../services/apiRestaurent";
import { useState } from "react";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export default function CreateOrder() {
  const cart = useSelector(getCart);
  const [priority, setPriority] = useState(false);

  console.log(cart);

  return (
    <div className="px-4 py-6 font-mono">
      <h2 className="mb-8 text-xl font-bold">Ready to order? Let's go!</h2>

      <Form method="post">
        {/* First Name */}
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="firstName">
            First Name
          </label>
          <input
            className="w-full rounded-full border border-stone-200 bg-white px-4 py-3 text-sm font-mono focus:outline-none focus:ring focus:ring-yellow-400 sm:grow"
            type="text"
            name="customer"
            id="firstName"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="phone">
            Phone number
          </label>
          <input
            className="w-full rounded-full border border-stone-200 bg-white px-4 py-3 text-sm font-mono focus:outline-none focus:ring focus:ring-yellow-400"
            type="tel"
            name="phone"
            id="phone"
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="address">
            Address
          </label>
          <div className="relative w-full">
            <input
              className="w-full rounded-full border border-stone-200 bg-white px-4 py-3 pr-36 text-sm font-mono focus:outline-none focus:ring focus:ring-yellow-400"
              type="text"
              name="address"
              id="address"
              required
            />
            {/* <button
              type="button"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold font-mono uppercase tracking-wide text-stone-800 hover:bg-yellow-300"
            >
              Get Position
            </button> */}
          </div>
        </div>

        {/* Priority checkbox */}
        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-5 w-5 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            onChange={() => setPriority((state) => !state)}
            checked={priority}
          />
          <label className="font-mono" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary">Order now </Button>
        </div>
      </Form>
    </div>
  );
}
