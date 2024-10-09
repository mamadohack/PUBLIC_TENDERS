import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page.tsx";
import Login, { SignUP } from "./pages/Login.tsx";

const router = createBrowserRouter([
  { path: "/sign-in", element: <Login /> },
  { path: "/sign-up", element: <SignUP /> },
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
