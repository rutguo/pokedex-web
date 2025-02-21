"use client";
import { usePathname } from "next/navigation";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Connections", href: "/connections" },
  { name: "Customers", href: "/customers" },
  { name: "Settings", href: "/settings" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="bg-primary pb-32">
      <Disclosure
        as="nav"
        className="border-b border-white/10 bg-primary lg:border-none"
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-white/10">
            <div className="flex items-center lg:px-0">
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-primary p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-offset-2 transition">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
              <div className="hidden lg:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.href === pathname
                          ? "bg-white/10 text-white"
                          : "text-white hover:bg-white/10 transition",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.href === pathname
                    ? "bg-white/10 text-white"
                    : "text-white hover:bg-white/10 transition",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {navigation.find((item) => item.href === pathname)?.name}
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
