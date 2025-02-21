"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronRightIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const shipments = [
  {
    id: 1,
    href: "#",
    reference: "1802271098",
    customer: "Neele-Vat Transport B.V.",
    error: false,
    date: "Finished 1m 32s ago",
    uuid: "7257d6f1",
  },
  {
    id: 2,
    href: "#",
    reference: "139150",
    customer: "Grafschafter Splitt Handel GmbH",
    error: false,
    date: "Finished 5h 12m ago",
    uuid: "38cd37e6",
  },
  {
    id: 3,
    href: "#",
    reference: "LEV03551958",
    customer: "De Jong Verpakkingen B.V.",
    error: true,
    date: "Finished 1d 1h ago",
    uuid: "3840476d",
  },
  {
    id: 4,
    href: "#",
    reference: "1802271098",
    customer: "Neele-Vat Transport B.V.",
    error: false,
    date: "Finished 1d 4h ago",
    uuid: "7257d6f1",
  },
  {
    id: 5,
    href: "#",
    reference: "139150",
    customer: "Grafschafter Splitt Handel GmbH",
    error: false,
    date: "Finished 2d 21h ago",
    uuid: "38cd37e6",
  },
  {
    id: 6,
    href: "#",
    reference: "139150",
    customer: "Grafschafter Splitt Handel GmbH",
    error: false,
    date: "Finished 5d 9h ago",
    uuid: "38cd37e6",
  },
  {
    id: 7,
    href: "#",
    reference: "139150",
    customer: "Grafschafter Splitt Handel GmbH",
    error: false,
    date: "Finished 6d 12h ago",
    uuid: "38cd37e6",
  },
];

export default function Dashboard() {
  return (
    <main>
      <header className="flex items-center justify-between border-b border-black/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <h1 className="text-xl font-semibold">
          Live feed{" "}
          <span className="text-black/50 text-sm ml-1">{`${shipments.length} shipments`}</span>
        </h1>
        {/* Sort dropdown */}
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center gap-x-1 text-sm/6 font-medium">
            Sort by
            <ChevronUpDownIcon
              aria-hidden="true"
              className="size-5 text-gray-500"
            />
          </MenuButton>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
              >
                Date
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
              >
                Customer
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </header>

      {/* Deployment list */}
      <ul role="list" className="divide-y divide-white/5">
        {shipments.map((s) => (
          <li
            key={s.id}
            className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8"
          >
            <div className="min-w-0 flex-auto">
              <div className="flex items-center gap-x-3">
                <div className="flex-none rounded-full p-1">
                  <div
                    className={`size-2 rounded-full ${
                      s.error ? "bg-red-500 animate-pulse" : "bg-green-500"
                    }`}
                  />
                </div>
                <h2 className="min-w-0 text-sm/6 hover:text-blue-700 transition">
                  <a href={s.href} className="flex gap-x-2">
                    <span className="truncate">{s.customer}</span>
                    <span className="text-black/50">/</span>
                    <span className="whitespace-nowrap text-black/50">
                      {s.reference}
                    </span>
                    <span className="absolute inset-0" />
                  </a>
                </h2>
              </div>
              <div className="mt-1 flex items-center gap-x-2.5 text-xs/5 text-black/50">
                <p className="truncate">{s.uuid}</p>
                <svg
                  viewBox="0 0 2 2"
                  className="size-0.5 flex-none fill-black/50"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <p className="whitespace-nowrap">{s.date}</p>
              </div>
            </div>
            <div className="items-center gap-x-1 hidden md:flex">
              <div
                className={`flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                  s.error
                    ? "bg-red-100 ring-red-300 text-red-800"
                    : "bg-green-100 ring-green-300 text-green-800"
                }`}
              >
                {s.error ? "Failed" : "Success"}
              </div>
              <ChevronRightIcon
                aria-hidden="true"
                className="size-5 flex-none text-black/50"
              />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
