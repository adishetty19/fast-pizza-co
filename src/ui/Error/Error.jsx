import { useRouteError } from "react-router";
import LinkButton from "../LinkButton/LinkButton";

export default function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 🥲`</h1>
      <p>{error.data}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}
