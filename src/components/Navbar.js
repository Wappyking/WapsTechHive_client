"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom/cjs/react-router-dom";

const projects = [
  {
    name: "Apps",
    description: "check our our mobile apps projects here",
    href: "/project/apps",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Websites",
    description: "check our our websites projects here",
    href: "/project/websites",
    icon: GlobeEuropeAfricaIcon,
  },
  // {
  //   name: "Security",
  //   description: "Your customers’ data will be safe and secure",
  //   href: "#",
  //   icon: FingerPrintIcon,
  // },
  // {
  //   name: "Integrations",
  //   description: "Connect with third-party tools",
  //   href: "#",
  //   icon: SquaresPlusIcon,
  // },
  // {
  //   name: "Automations",
  //   description: "Build strategic funnels that will convert",
  //   href: "#",
  //   icon: ArrowPathIcon,
  // },
];
const callsToAction = [
  // { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  // { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "Waps Tech Hive", href: "/", icon: DevicePhoneMobileIcon },
];

export default function Navbar({ page }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="bg-gradient-to-t from-black to-sky-500 "
      style={{ width: "100%", position: "fixed", zIndex: 99 }}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Waps Tech Hive</span>
            <img alt="" src="../logo.png" className="h-10 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* the dropdown codes */}
          <Popover className="relative">
            <PopoverButton
              className="flex items-center gap-x-1 text-lg font-semibold leading-6 group-hover:text-sky-500"
              style={{ color: page == "project" ? "red" : "white" }}
            >
              Project
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none  group-hover:text-sky-500"
                style={{ color: page == "project" ? "red" : "white" }}
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {projects.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-sky-300"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-500 group-hover:text-indigo-800"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        to={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-black">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            to="/"
            className="text-lg font-semibold leading-6"
            style={{ color: page == "home" ? "red" : "white" }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-semibold leading-6"
            style={{ color: page == "about" ? "red" : "white" }}
          >
            About
          </Link>
          <Link
            to="/contact-us"
            className="text-lg font-semibold leading-6"
            style={{ color: page == "contact us" ? "red" : "white" }}
          >
            Contact Us
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden text-white"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-r from-black to-sky-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Waps Tech Hive</span>
              <img alt="" src="../logo.png" className="h-10 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-red-800">
              <div className="space-y-2 py-6 text-white">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-sky-500 ">
                    Project
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...projects, ...callsToAction].map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-sky-500"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-sky-500"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-sky-500"
                >
                  About
                </Link>
                <Link
                  to="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-sky-500"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
