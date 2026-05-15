import { useLoaderData } from "react-router";
import { getOrder } from "../../services/apiRestaurent";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers";
import OrderItem from "./OrderItem";

export default function Order() {
  const orderData = useLoaderData();
  const {
    estimatedDelivery,
    id,
    priority,
    status,
    orderPrice,
    priorityPrice,
    cart,
  } = orderData.data;

  console.log(orderData.data);

  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  const priorityDate = priority
    ? new Date(
        new Date(estimatedDelivery).getTime() - deliveryIn * 0.4 * 60000,
      ).toISOString()
    : estimatedDelivery;
  const displayDelivery = priority ? priorityDate : estimatedDelivery;
  const displayMinutes = priority ? Math.round(deliveryIn * 0.6) : deliveryIn;

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>
        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}

          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {displayMinutes > 0
            ? `Only ${displayMinutes} minutes left 😃`
            : `Order should have arrived`}
        </p>

        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(displayDelivery)})
        </p>
      </div>

      <ul className="divide-stone-200 divide-y border-b border-t">
        {cart.map((orderDataItem) => (
          <OrderItem
            key={orderDataItem.pizzaId}
            orderDataItem={orderDataItem}
          />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Pizza Price: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Priority Price: {formatCurrency(priorityPrice)}
          </p>
        )}

        <p className="font-bold">
          To pay on Delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const data = await getOrder(params.orderId);
  return data;
}
