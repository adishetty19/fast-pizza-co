const order = {
  id: "ABCDEF",
  customer: "Aditya",
  phone: "123456789",
  address: "Thane, Maharashtra, India",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantithy: 3,
      unitPrice: 330,
      totalPrice: 990,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantithy: 1,
      unitPrice: 370,
      totalPrice: 370,
    },
    {
      pizzaId: 5,
      name: "Divola",
      quantithy: 2,
      unitPrice: 350,
      totalPrice: 700,
    },
  ],
  position: "",
  orderPrice: 2060,
  priorityPrice: 120,
};

export default function Order() {
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
}

return (
  <div>
    <div>
      <h2>status</h2>
    </div>

    <div>
      <span>Priority</span>
      <span>order</span>
    </div>

    <div>
      <p>Only estimated minutes left 😃</p>
      <p>Order should have arrived</p>
      <p>Esitmated delivery: estimatedDelivery</p>
    </div>
  </div>
);
