// TODO: style component
import { useRouteError } from "react-router-dom";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const error = useRouteError();

  return (
    <>
      <div>404! Not found</div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error instanceof Error && error.message}</i>
        <Button asChild>
          <Link to={`home`}>Home</Link>
        </Button>
      </p>
    </>
  );
}
