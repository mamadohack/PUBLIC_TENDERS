import { FaCheck } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Avantages></Avantages>
      <Abonnements></Abonnements>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export function NavBar() {
  return (
    <div className="pb-3 pt-3 max-w-7xl mx-auto">
      <div className="max-w-[85rem] mx-auto w-full px-5 pb-2">
        <div className="flex-1 flex items-center justify-end gap-x-3 pt-2">
          <a
            className="inline-flex justify-center items-center gap-x-2 font-medium text-xs lg:text-[0.82rem] text-gray-800 hover:text-neutral-500 focus:outline-none focus:text-neutral-500 "
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
            className="inline-flex justify-center items-center gap-x-2 font-medium text-xs lg:text-[0.9rem] text-gray-800 hover:text-neutral-500 focus:outline-none focus:text-neutral-500 bg-white"
          >
            Contact
          </button>
          {/* <!-- End Button Group --> */}
        </div>
      </div>
      <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full">
        <nav className="relative w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-5 ">
          <div className="lg:col-span-3">
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
              <span className="font-semibold text-[1.15rem] lg:text-[1.4rem] ms-2 text-gray-900 align-sub sm:inline-block hidden">
                Algé<span className="text-[var(--primary)]">Tenders</span>
              </span>
            </a>
          </div>

          <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3 ">
            <Link to={"/sign-up"}>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md bg-white text-gray-900 hover:text-gray-600 focus:text-gray-600 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none "
              >
                S'abonner
              </button>
            </Link>
            <Link to={"/sign-in"}>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-primary text-white hover:bg-primaryhover focus:outline-none focus:bg-primaryhover transition disabled:opacity-50 disabled:pointer-events-none"
              >
                Se connecter
              </button>
            </Link>

            <div className="lg:hidden">
              <button
                type="button"
                className="ms-1 hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
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
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
            aria-labelledby="hs-navbar-hcail-collapse"
          >
            <div className="flex flex-col text-sm lg:text-base gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
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
      <div className="flex py-5 lg:py-12 max-w-7xl mx-auto px-5 items-center flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <h2 className="text-4xl lg:text-6xl font-semibold text-gray-900 mb-2">
            Tous les appel d’offres
          </h2>
          <h2 className="text-4xl lg:text-6xl font-semibold text-primary">même endroit</h2>
          <p className="text-gray-600 mt-5">
            Avec l’abonnement à notre site web, vous pouvez consulter tous les
            appels d’offres nationaux et internationaux dans le domaine de votre
            activité.
          </p>
          <button className="bg-primary text-white font-medium px-7 py-3 rounded-md mt-5 hover:bg-primaryhover text-base">
            S'abonner
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="max-w-[450px] h-auto mx-auto w-full"
            src="/assets/hero.svg"
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
        <div className="px-5 max-w-7xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-xl bg-white text-gray-900 hover:text-primary p-5 ">
            <h2 className="font-extrabold text-2xl lg:text-3xl duration-200">350+</h2>
            <p className="mt-2 lg:text-xl text-gray-900">Clients satisfaits</p>
          </div>
          <div className="rounded-xl bg-white text-gray-900 hover:text-primary p-5 ">
            <h2 className="font-extrabold text-2xl lg:text-3xl duration-200">12k+</h2>
            <p className="mt-2 lg:text-xl text-gray-900">Annonces</p>
          </div>
          <div className="rounded-xl bg-white text-gray-900 hover:text-primary p-5 ">
            <h2 className="font-extrabold text-2xl lg:text-3xl duration-200">+20</h2>
            <p className="mt-2 lg:text-xl text-gray-900">Experts consultants</p>
          </div>
          <div className="rounded-xl bg-white text-gray-900 hover:text-primary p-5 ">
            <h2 className="font-extrabold text-2xl lg:text-3xl duration-200">+10</h2>
            <p className="mt-2 lg:text-xl text-gray-900">Staff</p>
          </div>
        </div>
      </div>
      <div className="px-5 max-w-7xl mx-auto py-5 lg:py-12 flex items-center flex-wrap gap-y-5">
        <div className="lg:w-1/2 w-full">
          <img
            src="/assets/avantages.svg"
            alt=""
            className="mx-auto max-w-[450px] h-auto w-full"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-2">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-3 text-gray-600 ">
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
      <div className="lg:py-10 py-5 max-w-7xl mx-auto px-5 text-gray-900 ">
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-5">
          Nos abonnements
        </h2>
        <p className="text-gray-900 font-medium text-center mb-8">
          Chez nous, chaque abonnement est une porte ouverte vers des cadeaux
          sensationnels. Laissez-vous surprendre !
        </p>
        <ul className="max-w-4xl mx-auto space-y-8">
          <li className="bg-white rounded flex group drop-shadow-sm flex-wrap lg:flex-nowrap">
            <div className="pb-0 lg:pb-8 p-8 flex-grow ">
              <h2
                className="max-w-max font-bold text-3xl pb-3 relative 
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
            <div className="p-8 price ">
              <div
                className="pb-3 relative text-gray-600
              before:absolute before:w-[100%] before:duration-200 before:h-[3px] 
              before:bottom-0 before:left-0 before:bg-gray-200 before:content-['']
              after:delay-500
              after:absolute after:w-[0%] group-hover:after:w-[100%] after:duration-200 after:h-[3px] 
              after:bottom-0 after:left-0 after:bg-primary after:content-['']"
              >
                <span className=" text-4xl font-meduim text-gray-900">600</span>
                <span className="text-xs ms-1 text-gray-900">DA/Mois</span>
              </div>
              <button className="px-5 py-3 font-medium border-2 rounded-md mt-5 border-primary duration-200 text-primary hover:bg-primary hover:text-white  ">
                Apprendre encore plus
              </button>
            </div>
          </li>
          <li className="bg-white rounded flex group drop-shadow-sm flex-wrap lg:flex-nowrap">
            <div className="pb-0 lg:pb-8 p-8 flex-grow">
              <h2
                className="max-w-max font-bold text-3xl pb-3 relative 
                before:absolute before:w-[100%] before:duration-200 before:h-[3px] 
              before:bottom-0 before:left-0 before:bg-gray-200 before:content-['']
              after:absolute after:w-[0%] group-hover:after:w-[100%] after:duration-200 after:h-[3px] 
              after:bottom-0 after:left-0 after:bg-primary after:content-['']"
              >
                Standard
              </h2>
              <ul className=" space-y-2 mt-3">
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    8 secteurs d'activité.
                  </span>
                </li>
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    Tous les types d'annonces.
                  </span>
                </li>
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    Notifications par e-mail.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-8 price ">
              <div
                className="pb-3 relative text-gray-600
              before:absolute before:w-[100%] before:duration-200 before:h-[3px] 
              before:bottom-0 before:left-0 before:bg-gray-200 before:content-['']
              after:delay-500
              after:absolute after:w-[0%] group-hover:after:w-[100%] after:duration-200 after:h-[3px] 
              after:bottom-0 after:left-0 after:bg-primary after:content-['']"
              >
                <span className=" text-4xl font-meduim text-gray-900">900</span>
                <span className="text-xs ms-1 text-gray-900">DA/Mois</span>
              </div>
              <button className="px-5 py-3 font-medium border-2 rounded-md mt-5 border-primary duration-200 text-primary hover:bg-primary hover:text-white  ">
                Apprendre encore plus
              </button>
            </div>
          </li>
          <li className="bg-white rounded flex group drop-shadow-sm flex-wrap lg:flex-nowrap">
            <div className="pb-0 lg:pb-8 p-8 flex-grow ">
              <h2
                className="max-w-max font-bold text-3xl pb-3 relative 
                before:absolute before:w-[100%] before:duration-200 before:h-[3px] 
              before:bottom-0 before:left-0 before:bg-gray-200 before:content-['']
              after:absolute after:w-[0%] group-hover:after:w-[100%] after:duration-200 after:h-[3px] 
              after:bottom-0 after:left-0 after:bg-primary after:content-['']"
              >
                Premium
              </h2>
              <ul className=" space-y-2 mt-3">
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    Tous les secteurs d'activité.
                  </span>
                </li>
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    Tous les types d'annonces.
                  </span>
                </li>
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    Inscription sur l'index des opérateurs.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-8 price ">
              <div
                className="pb-3 relative text-gray-600
              before:absolute before:w-[100%] before:duration-200 before:h-[3px] 
              before:bottom-0 before:left-0 before:bg-gray-200 before:content-['']
              after:delay-500
              after:absolute after:w-[0%] group-hover:after:w-[100%] after:duration-200 after:h-[3px] 
              after:bottom-0 after:left-0 after:bg-primary after:content-['']"
              >
                <span className=" text-4xl font-meduim text-gray-900">
                  1300
                </span>
                <span className="text-xs ms-1 text-gray-900">DA/Mois</span>
              </div>
              <button className="px-5 py-3 font-medium border-2 rounded-md mt-5 border-primary duration-200 text-primary hover:bg-primary hover:text-white  ">
                Apprendre encore plus
              </button>
            </div>
          </li>
          <li className="bg-white rounded flex group drop-shadow-sm flex-wrap lg:flex-nowrap">
            <div className="pb-0 lg:pb-8 p-8 flex-grow ">
              <h2
                className="max-w-max font-bold text-3xl pb-3 relative 
                before:absolute before:w-[100%] before:duration-200 before:h-[3px] 
              before:bottom-0 before:left-0 before:bg-gray-200 before:content-['']
              after:absolute after:w-[0%] group-hover:after:w-[100%] after:duration-200 after:h-[3px] 
              after:bottom-0 after:left-0 after:bg-primary after:content-['']"
              >
                Architect
              </h2>
              <ul className=" space-y-2 mt-3">
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    1 secteur d'activité.
                  </span>
                </li>
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    Tous les types d'annonces.
                  </span>
                </li>
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    Notifications par e-mail.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-8 price ">
              <div
                className="pb-3 relative text-gray-600
              before:absolute before:w-[100%] before:duration-200 before:h-[3px] 
              before:bottom-0 before:left-0 before:bg-gray-200 before:content-['']
              after:delay-500
              after:absolute after:w-[0%] group-hover:after:w-[100%] after:duration-200 after:h-[3px] 
              after:bottom-0 after:left-0 after:bg-primary after:content-['']"
              >
                <span className=" text-4xl font-meduim text-gray-900">500</span>
                <span className="text-xs ms-1 text-gray-900">DA/Mois</span>
              </div>
              <button className="px-5 py-3 font-medium border-2 rounded-md mt-5 border-primary duration-200 text-primary hover:bg-primary hover:text-white  ">
                Apprendre encore plus
              </button>
            </div>
          </li>
          <li className="bg-white rounded flex group drop-shadow-sm flex-wrap lg:flex-nowrap">
            <div className="pb-0 lg:pb-8 p-8 flex-grow ">
              <h2
                className="max-w-max font-bold text-3xl pb-3 relative 
                before:absolute before:w-[100%] before:duration-200 before:h-[3px] 
              before:bottom-0 before:left-0 before:bg-gray-200 before:content-['']
              after:absolute after:w-[0%] group-hover:after:w-[100%] after:duration-200 after:h-[3px] 
              after:bottom-0 after:left-0 after:bg-primary after:content-['']"
              >
                EBTPH
              </h2>
              <ul className=" space-y-2 mt-3">
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    6 secteurs d'activité.
                  </span>
                </li>
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    Tous les types d'annonces.
                  </span>
                </li>
                <li>
                  <FaCheck className="inline-block text-primary text-xl" />
                  <span className="ms-2 text-gray-600 align-middle">
                    Notifications par e-mail.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-8 price ">
              <div
                className="pb-3 relative text-gray-600
              before:absolute before:w-[100%] before:duration-200 before:h-[3px] 
              before:bottom-0 before:left-0 before:bg-gray-200 before:content-['']
              after:delay-500
              after:absolute after:w-[0%] group-hover:after:w-[100%] after:duration-200 after:h-[3px] 
              after:bottom-0 after:left-0 after:bg-primary after:content-['']"
              >
                <span className=" text-4xl font-meduim text-gray-900">
                  1000
                </span>
                <span className="text-xs ms-1 text-gray-900">DA/Mois</span>
              </div>
              <button className="px-5 py-3 font-medium border-2 rounded-md mt-5 border-primary duration-200 text-primary hover:bg-primary hover:text-white  ">
                Apprendre encore plus
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <section id="contact" className="max-w-[1200px] mx-auto py-16 flex gap-10 flex-col md:flex-row px-5">
      <div className="md:w-1/2 w-full">
        <h2
          className="text-2xl lg:text-3xl font-semibold max-w-max text-[--black-text] mb-3"
        >
          Avez-vous des questions ?
        </h2>
        <h2
          className="text-2xl lg:text-3xl font-bold max-w-max  text-[--primary] mb-5"
        >
          Écrivez-nous simplement un message !
        </h2>
        <img src="/Contactus.svg" alt="" className="max-w-[450px] h-auto w-full" />
      </div>
      <div className="md:w-1/2 w-full">
        <form className="border px-5 py-10 border-[#C8C8C8] rounded-lg">
          <div className="mb-3">
            <h2 className="text-[--black-text]">Nom et prénom</h2>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="px-3 py-2 border-b outline-none border-[#C8C8C8] w-full"
            />
          </div>
          <div className="mb-3">
            <h2 className="text-[--black-text]">Numéro de téléphone</h2>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="px-3 py-2 border-b outline-none border-[#C8C8C8] w-full"
            />
          </div>
          <div className="mb-3">
            <h2 className="text-[--black-text]">Email</h2>
            <input
              type="email"
              name="email"
              id="email"
              className="px-3 py-2 border-b outline-none border-[#C8C8C8] w-full"
            />
          </div>
          <div className="">
            <h2 className="text-[--black-text] mb-5">Message</h2>
            <textarea
              name="message"
              id="message"
              className="px-3 py-2 border outline-none border-[#C8C8C8] w-full rounded-sm min-h-32 mb-3"
            ></textarea>
          </div>
          <button
          type="submit"
          className="block py-3 px-8 bg-[var(--primary)] text-white font-semibold rounded-[8px] duration-200 hover:opacity-85 mx-auto"
        >
          <span className="align-middle">Envoyer</span>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block ms-2"
          >
            <path
              d="m13 11.5 8.2-8.2M22 7.3V2.5h-4.8M11 2.5H9c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        </form>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-5">
        <div className="px-5 col-span-12 lg:col-span-6 space-y-5 ">
          <div className="pb-3 border-b-2 border-white ">
            <button
              className="flex-none text-xl inline-block font-semibold cursor-default"
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
              <span className="font-light text-[1.4rem] ms-2 text-white align-sub">
                Algé<span className="text-white font-semibold">Tenders</span>
              </span>
            </button>
          </div>
          <h2 className="flex">
            <IoHomeOutline className="inline-block me-2 text-3xl text-white flex-shrink-0" />
            <span className=" text-white self-end">
              Quartier de belle vue, 39000 El Oued, Algerie
            </span>
          </h2>
          <h2 className="flex items-end">
            <FaWhatsapp className="inline-block me-2 text-3xl text-white flex-shrink-0" />
            <a
              className="text-white hover:text-primaryhover duration-200"
              href="tel:0792921299"
            >
              0792 92 12 99
            </a>
          </h2>
          <h2 className="flex items-end">
            <MdOutlineMailOutline className="inline-block me-2 text-3xl text-white flex-shrink-0" />
            <a
              className=" text-white hover:text-primaryhover duration-200"
              href="email:info@publictendersalgeria.com"
            >
              info@publictendersalgeria.com
            </a>
          </h2>
          <div className="space-x-5">
            <a href="">
              <FaFacebookSquare className="text-2xl text-white inline-block hover:text-primaryhover duration-200" />
            </a>
            <a href="">
              <FaSquareXTwitter className="text-2xl text-white inline-block hover:text-primaryhover duration-200" />
            </a>
            <a href="">
              <FaYoutube className="text-3xl text-white inline-block hover:text-primaryhover duration-200" />
            </a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 px-5 lg:border-s-2 border-white text-white space-y-10 py-5 font-semibold ">
          <h2>
            <a href="">Nos avantages</a>
          </h2>
          <h2>
            <a href="">Nos abonnements</a>
          </h2>
          <h2>
            <a href="">Qui sommes-nous ?</a>
          </h2>
          <h2>
            <a href="">Contactez-Nous</a>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-3 px-5 text-white space-y-10 py-5 font-semibold ">
          <h2>
            <a href="">FAQ</a>
          </h2>
          <h2>
            <a href="">Nos abonnements</a>
          </h2>
          <h2>
            <a href="">Les conditions d'utilisation.</a>
          </h2>
        </div>
      </div>
    </footer>
  );
}
export default HomePage;
