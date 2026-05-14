const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 360,
    totalPrice: 720,
  },
  {
    pizzaId: 6,
    name: "vegetale",
    quantity: 1,
    unitPrice: 280,
    totalPrice: 280,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mishroom",
    quantity: 1,
    unitPrice: 320,
    totalPrice: 320,
  },
];

export default function CreateOrder() {
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" required />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="tel" name="phone" id="phone" required />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" required />
        </div>

        <div>
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <button>Order now</button>
        </div>
      </form>
    </div>
  );
}
