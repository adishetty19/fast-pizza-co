import { useSelector } from "react-redux";
import Button from "../../ui/Button/Button";
import { clearCart, getCart, getTotalPrice } from "../cart/cartSlice";
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router";
import { createOrder } from "../../services/apiRestaurent";
import { formatCurrency } from "../../utilities/helpers";
import store from "../../services/state";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export default function CreateOrder() {
  const cart = useSelector(getCart);
  console.log(cart);
  const navigation = useNavigation();
  const errors = useActionData();
  const isSubmitting = navigation.state === "submitting";

  const [priority, setPriority] = useState(false);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="px-4 py-6 font-mono">
      <h2 className="mb-8 text-xl font-bold">Ready to order? Let's go!</h2>

      <Form method="POST">
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
          {errors?.phone && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {errors.phone}
            </p>
          )}
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
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary">
            {isSubmitting
              ? "Preparing order..."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = {};
  if (!isValidPhone(data.phone))
    errors.phone = "Please give us a valid phone number 📞";
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };
  console.log(newOrder);

  const order = await createOrder(newOrder);
  store.dispatch(clearCart());
  console.log(order.data.id);
  return redirect(`/order/${order.data.id}`);
}
