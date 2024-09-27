import { FaCheck } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Avantages></Avantages>
      <Abonnements></Abonnements>
    </>
  );
}

export function NavBar() {
  return (
    <div className="pb-7 pt-3 max-w-7xl mx-auto">
      <div className="max-w-[85rem] mx-auto w-full px-4 pb-2">
        <div className="flex-1 flex items-center justify-end gap-x-3 pt-2">
          <a
            className="inline-flex justify-center items-center gap-x-2 font-medium text-[0.82rem] text-gray-800 hover:text-neutral-500 focus:outline-none focus:text-neutral-500 "
            href="#"
          >
            <svg
              className="shrink-0 size-3.5"
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
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
              <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
              <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            Arabic (AR)
          </a>

          {/* <!-- Button Group --> */}
          <button
            type="button"
            className="inline-flex justify-center items-center gap-x-2 font-medium text-[0.9rem] text-gray-800 hover:text-neutral-500 focus:outline-none focus:text-neutral-500"
          >
            Contact
          </button>
          {/* <!-- End Button Group --> */}
        </div>
      </div>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav className="relative w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 ">
          <div className="md:col-span-3">
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80 hover:opacity-85"
              href="../templates/creative-agency/index.html"
              aria-label="Preline"
            >
              <svg
                className="w-9 h-auto inline-block"
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
              <span className="font-semibold text-[1.4rem] ms-2 text-gray-900 align-sub">
                Algé<span className="text-[var(--primary)]">Tenders</span>
              </span>
            </a>
          </div>

          <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md bg-white text-gray-900 hover:text-gray-600 focus:text-gray-600 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none "
            >
              S'abonner
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-primary text-white hover:bg-primaryhover focus:outline-none focus:bg-primaryhover transition disabled:opacity-50 disabled:pointer-events-none"
            >
              Se connecter
            </button>

            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                id="hs-navbar-hcail-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-hcail"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-hcail"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-4"
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="hs-navbar-hcail"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
            aria-labelledby="hs-navbar-hcail-collapse"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
              {/* <div>
                <a
                  className="inline-block text-gray-900 hover:text-gray-600 focus:outline-none focus:text-gray-600 "
                  href="#"
                >
                  Services
                </a>
              </div> */}
              <div>
                <a
                  className="inline-block text-gray-900 hover:text-gray-600 focus:outline-none focus:text-gray-600 "
                  href="#"
                >
                  Nos avantages
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-gray-900 hover:text-gray-600 focus:outline-none focus:text-gray-600 "
                  href="#"
                >
                  Nos abonnements
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-gray-900 hover:text-gray-600 focus:outline-none focus:text-gray-600 "
                  href="#"
                >
                  Qui sommes-nous ?
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export function HeroSection() {
  return (
    <section>
      <div className="flex py-10 max-w-7xl mx-auto px-4 items-center">
        <div className="w-1/2 ">
          <h2 className="text-6xl font-semibold text-gray-900 mb-2">
            Tous les appel d’offres
          </h2>
          <h2 className="text-6xl font-semibold text-primary">même endroit</h2>
          <p className="text-gray-600 mt-5">
            Avec l’abonnement à notre site web, vous pouvez consulter tous les
            appels d’offres nationaux et internationaux dans le domaine de votre
            activité.
          </p>
          <button className="bg-primary text-white font-medium px-7 py-3 rounded-md mt-5 hover:bg-primaryhover">
            S'abonner
          </button>
        </div>
        <div className="w-1/2">
          <img
            className="max-w-[450px] h-auto mx-auto"
            src="/src/assets/hero.svg"
          ></img>
        </div>
      </div>
    </section>
  );
}
export function Avantages() {
  return (
    <section>
      <div className="bg-primary">
        <div className="px-4 max-w-7xl mx-auto py-10 grid grid-cols-4 gap-5">
          <div className="rounded-xl bg-white text-gray-900 hover:text-primary p-5 ">
            <h2 className="font-extrabold text-3xl duration-200">350+</h2>
            <p className="mt-2 text-xl text-gray-900">Clients satisfaits</p>
          </div>
          <div className="rounded-xl bg-white text-gray-900 hover:text-primary p-5 ">
            <h2 className="font-extrabold text-3xl duration-200">12k+</h2>
            <p className="mt-2 text-xl text-gray-900">Annonces</p>
          </div>
          <div className="rounded-xl bg-white text-gray-900 hover:text-primary p-5 ">
            <h2 className="font-extrabold text-3xl duration-200">+20</h2>
            <p className="mt-2 text-xl text-gray-900">Experts consultants</p>
          </div>
          <div className="rounded-xl bg-white text-gray-900 hover:text-primary p-5 ">
            <h2 className="font-extrabold text-3xl duration-200">+10</h2>
            <p className="mt-2 text-xl text-gray-900">Staff</p>
          </div>
        </div>
      </div>
      <div className="px-4 max-w-7xl mx-auto py-10 flex items-center">
        <div className="w-1/2">
          <img
            src="/src/assets/avantages.svg"
            alt=""
            className="mx-auto max-w-[450px] h-auto"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl font-semibold text-primary mb-2">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-3 text-gray-600">
            Grâce à notre plateforme, vous pouvez repérer rapidement des marchés
            intéressants, en utilisant divers critères de recherche pour une
            meilleure efficacité.
          </p>
          <ul className="mt-3 space-y-3">
            <li>
              <FaCheck className="inline-block text-primary text-xl" />
              <span className="ms-2 text-gray-600 align-middle">
                Secteurs d’activités.
              </span>
            </li>
            <li>
              <FaCheck className="inline-block text-primary text-xl" />
              <span className="ms-2 text-gray-600 align-middle">Dates.</span>
            </li>
            <li>
              <FaCheck className="inline-block text-primary text-xl" />
              <span className="ms-2 text-gray-600 align-middle">
                Zones géographiques.
              </span>
            </li>
            <li>
              <FaCheck className="inline-block text-primary text-xl" />
              <span className="ms-2 text-gray-600 align-middle">
                Type d’annonces (Nationales/Internationales).
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export function Abonnements() {
  return (
    <section className="bg-gray-200">
      <div className="py-10 max-w-7xl mx-auto px-4 text-gray-900">
        <h2 className="text-4xl font-semibold text-primary text-center mb-10">
          Nos abonnements
        </h2>
        <ul className="max-w-4xl mx-auto">
          <li className="bg-white rounded flex group drop-shadow-sm">
            <div className="p-8">
              <h2
                className="max-w-max font-extrabold text-3xl pb-3 relative 
                before:absolute before:w-[100%] before:duration-200 before:h-[3px] 
              before:bottom-0 before:left-0 before:bg-gray-200 before:content-['']
              after:absolute after:w-[0%] group-hover:after:w-[100%] after:duration-200 after:h-[3px] 
              after:bottom-0 after:left-0 after:bg-primary after:content-['']"
              >
                Basic
              </h2>
              <ul className=" space-y-2 mt-3">
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    3 secteurs d'activité.
                  </span>
                </li>
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    Tous les types d'annonces.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-8"></div>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default HomePage;
