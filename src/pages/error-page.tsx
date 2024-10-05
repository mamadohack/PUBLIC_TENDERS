import { useRouteError } from "react-router-dom";
import { isRouteErrorResponse } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError(); 
  console.error(error);

  return (
    <div id="error-page" className="h-screen w-full flex justify-center items-center bg-gray-900">
      <div className="p-5 rounded-lg bg-white text-center hover:-translate-y-5 duration-300">
        <h1 className="font-extrabold text-3xl  mb-5">Oops!</h1>
        <p className="mb-5 font-medium">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{ isRouteErrorResponse(error) ? (error?.statusText) : ""}</i>
        </p>
      </div>
    </div>
  );
}
