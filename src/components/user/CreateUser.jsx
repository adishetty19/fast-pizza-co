import Button from "../../ui/Button/Button";

export default function CreateUser() {
  return (
    <form className="flex flex-col items-center gap-4">
      <p className="mb-4 font-mono text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>
      <input
        type="text"
        placeholder="Your full name"
        className="w-72 rounded-full border border-stone-300 px-4 py-3 text-sm font-mono focus:outline-none focus:ring focus:ring-yellow-400 md:w-96"
      />
      <div>
        <Button type="primary">Start ordering</Button>
      </div>
    </form>
  );
}
