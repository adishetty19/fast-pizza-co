import LinkButton from "../LinkButton/LinkButton";

export default function Error() {
  return (
    <div>
      <h1>Something went wrong 🥲`</h1>
      <p>error</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}
