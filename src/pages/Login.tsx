import { useState } from "react";
import { Form, Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";

function Login() {
  return (
    <main className="min-h-svh bg-gray-300 flex items-center justify-center px-5">
      <div className="p-3 bg-white flex rounded-lg drop-shadow-xl items-center gap-10 max-w-6xl">
        <div className="max-w-screen-md flex-grow md:w-1/2 p-5 px-7">
          <Form>
            <div className="mb-5">
              <a
                className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80 hover:opacity-85"
                href="../templates/creative-agency/index.html"
                aria-label="Preline"
              >
                <svg
                  className="w-7 h-auto inline-block"
                  width="224"
                  height="209"
                  viewBox="0 0 224 209"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_316_107)">
                    <path
                      d="M168.79 97.35V53.47L95.52 0V96L83 105.15V53.5L0 114.07V208.07H11.25V119.79L71.76 75.64V113.36L35.88 139.55V208H83V133.16L71.75 141.37V196.79H47.13V145.27L106.77 101.75V22.14L157.53 59.19V89.19L122.66 63.69V208H133.91V85.83L211.81 142.67V196.79H168.81V125.36L157.55 117.15V208H223.08V137L168.79 97.35Z"
                      fill="#3a6f8e"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_316_107">
                      <rect width="223.06" height="208.04" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-semibold text-[1.15rem] ms-2 text-gray-900 align-sub sm:inline-block hidden">
                  Algé<span className="text-[var(--primary)]">Tenders</span>
                </span>
              </a>
            </div>
            <h2 className="font-semibold text-xl md:text-3xl text-gray-900 mb-1 md:mb-3">
              Holla,
            </h2>
            <h2 className="font-semibold text-xl md:text-3xl text-gray-900 mb-1 md:mb-3">
              Content de te revoir
            </h2>
            <p className="text-gray-500 md:mb-5 mb-3 text-sm md:text-base">
              Hé, bienvenue dans ton endroit spécial.
            </p>

            <div className="max-w-sm space-y-3 mb-5">
              <div className="relative">
                <input
                  type="email"
                  className="peer duration-200 py-3 px-4 ps-11 block w-full bg-gray-100 border-2 border-transparent rounded-lg text-sm  focus:border-primary disabled:opacity-50 disabled:pointer-events-none outline-none"
                  placeholder="Entrez le nom de l'utilisateur"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <svg
                    className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  type="password"
                  className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-2 duration-200 border-transparent rounded-lg text-sm focus:border-primary disabled:opacity-50 disabled:pointer-events-none outline-none "
                  placeholder="Entrez le mot de passe"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none  ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <svg
                    className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                    <circle cx="16.5" cy="7.5" r=".5"></circle>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex justify-between max-w-md items-center flex-wrap gap-2">
                <div className="">
                  <input
                    type="checkbox"
                    className="shrink-0 mt-0.5 border-gray-200 rounded text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none accent-primary w-3.5"
                    id="hs-default-checkbox"
                  />
                  <label
                    htmlFor="hs-default-checkbox"
                    className="text-sm text-gray-500 ps-2 "
                  >
                    Souviens-toi de moi
                  </label>
                </div>
                <p className="text-gray-500 text-sm">
                  <Link
                    to={"/login"}
                    className=" hover:text-primaryhover duration-200"
                  >
                    Mot de passe oublié ?
                  </Link>
                </p>
              </div>
            </div>
            <Link to={"/login"}>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-primary text-white hover:bg-primaryhover focus:outline-none focus:bg-primaryhover transition disabled:opacity-50 disabled:pointer-events-none"
              >
                Se connecter
              </button>
            </Link>
            <p className="mt-5 text-gray-500 text-sm">
              Don't have an account ?{" "}
              <Link
                to={"/sign-up"}
                className="text-primary hover:text-primaryhover duration-200 font-medium"
              >
                Sign Up
              </Link>
            </p>
          </Form>
        </div>
        <div className="hidden md:block md:w-1/2 ">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/assets/login.png"
              alt=""
              className=" object-cover min-h-[500px]"
            />
            <svg
              className="w-7 h-auto inline-block absolute top-2 right-2"
              width="224"
              height="209"
              viewBox="0 0 224 209"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_316_107)">
                <path
                  d="M168.79 97.35V53.47L95.52 0V96L83 105.15V53.5L0 114.07V208.07H11.25V119.79L71.76 75.64V113.36L35.88 139.55V208H83V133.16L71.75 141.37V196.79H47.13V145.27L106.77 101.75V22.14L157.53 59.19V89.19L122.66 63.69V208H133.91V85.83L211.81 142.67V196.79H168.81V125.36L157.55 117.15V208H223.08V137L168.79 97.35Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_316_107">
                  <rect width="223.06" height="208.04" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Link to={"/"} className="absolute top-2 left-2">
              <button
                type="button"
                className="py-0.5 px-2 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent bg-white bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:bg-opacity-75 transition disabled:opacity-50 disabled:pointer-events-none"
              >
                Back to website
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export function SignUP() {
  const [showPassword, setShowPassword] = useState(false);
  console.log("rendered");
  return (
    <main className="min-h-svh bg-gray-300 flex items-center justify-center px-5">
      <div className="p-3 bg-white flex rounded-lg drop-shadow-xl items-center gap-10 max-w-6xl w-full">
        <div className="hidden md:block md:w-1/2 ">
          <div className="relative rounded-lg ">
            <img
              src="/assets/login.png"
              alt=""
              className="h-[500px] object-cover w-full  rounded-lg"
            />
            <svg
              className="w-7 h-auto inline-block absolute top-2 right-2"
              width="224"
              height="209"
              viewBox="0 0 224 209"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_316_107)">
                <path
                  d="M168.79 97.35V53.47L95.52 0V96L83 105.15V53.5L0 114.07V208.07H11.25V119.79L71.76 75.64V113.36L35.88 139.55V208H83V133.16L71.75 141.37V196.79H47.13V145.27L106.77 101.75V22.14L157.53 59.19V89.19L122.66 63.69V208H133.91V85.83L211.81 142.67V196.79H168.81V125.36L157.55 117.15V208H223.08V137L168.79 97.35Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_316_107">
                  <rect width="223.06" height="208.04" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Link to={"/"} className="absolute top-2 left-2">
              <button
                type="button"
                className="py-0.5 px-2 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent bg-white bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:bg-opacity-75 transition disabled:opacity-50 disabled:pointer-events-none"
              >
                Back to website
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-screen-md flex-grow md:w-1/2 p-5 px-7">
          <Form>
            <div className="mb-5">
              <a
                className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80 hover:opacity-85"
                href="../templates/creative-agency/index.html"
                aria-label="Preline"
              >
                <svg
                  className="w-7 h-auto inline-block"
                  width="224"
                  height="209"
                  viewBox="0 0 224 209"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_316_107)">
                    <path
                      d="M168.79 97.35V53.47L95.52 0V96L83 105.15V53.5L0 114.07V208.07H11.25V119.79L71.76 75.64V113.36L35.88 139.55V208H83V133.16L71.75 141.37V196.79H47.13V145.27L106.77 101.75V22.14L157.53 59.19V89.19L122.66 63.69V208H133.91V85.83L211.81 142.67V196.79H168.81V125.36L157.55 117.15V208H223.08V137L168.79 97.35Z"
                      fill="#3a6f8e"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_316_107">
                      <rect width="223.06" height="208.04" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-semibold text-[1.15rem] ms-2 text-gray-900 align-sub sm:inline-block hidden">
                  Algé<span className="text-[var(--primary)]">Tenders</span>
                </span>
              </a>
            </div>
            <h2 className="font-semibold text-xl md:text-3xl text-gray-900 mb-1 md:mb-3">
              Créer un compte
            </h2>
            <p className="text-gray-500 md:mb-5 mb-3 text-sm">
              j'ai déjà un compte ?{" "}
              <Link to={"/sign-in"} className="text-primary">
                Log in
              </Link>
            </p>

            <div className="max-w-xs space-y-3 mb-5">
              <div className="flex gap-3">
                <input
                  type="text"
                  className="peer duration-200 py-3 px-4 block w-1/2 bg-gray-100 border-2 border-gray-100 rounded-lg text-sm  focus:border-primary disabled:opacity-50 disabled:pointer-events-none outline-none"
                  placeholder="Prénom"
                />
                <input
                  type="text"
                  className="peer duration-200 py-3 px-4 block w-1/2 bg-gray-100 border-2 border-gray-100 rounded-lg text-sm  focus:border-primary disabled:opacity-50 disabled:pointer-events-none outline-none"
                  placeholder="Nom"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  className="peer duration-200 py-3 px-4 block w-full bg-gray-100 border-2 border-gray-100 rounded-lg text-sm  focus:border-primary disabled:opacity-50 disabled:pointer-events-none outline-none"
                  placeholder="Email"
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="peer py-3 px-4 pe-11 block w-full bg-gray-100 border-2 duration-200 border-gray-100 rounded-lg text-sm focus:border-primary disabled:opacity-50 disabled:pointer-events-none outline-none "
                  placeholder="Mot de passe"
                />
                <div
                  onClick={() => {
                    setShowPassword((p) => !p);
                  }}
                  className="absolute inset-y-0 end-0 flex items-center pe-4 peer-disabled:opacity-50 cursor-pointer"
                >
                  <IoEye
                    className={`${
                      showPassword ? "text-primary" : "text-gray-500"
                    } duration-200 text-xl`}
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="">
                <input
                  type="checkbox"
                  className="shrink-0 mt-0.5 border-gray-200 rounded text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none accent-primary w-3.5"
                  id="hs-default-checkbox"
                />
                <label
                  htmlFor="hs-default-checkbox"
                  className="text-sm text-gray-500 ps-2 "
                >
                  j'accepte les
                </label>
                <Link to={"/login"} className="text-primary">
                  termes et conditions
                </Link>
              </div>
            </div>
            <Link to={"/login"}>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-primary text-white hover:bg-primaryhover focus:outline-none focus:bg-primaryhover transition disabled:opacity-50 disabled:pointer-events-none"
              >
                Créer un compte
              </button>
            </Link>
          </Form>
        </div>
      </div>
    </main>
  );
}
export default Login;
