import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { JSX, SVGProps } from "react";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Customers", href: "#", current: false },
  { name: "Statistics", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
];

const footer = [
  {
    name: "GitHub",
    href: "https://github.com/rutguo/transparse",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  return (
    <>
      <div className="min-h-full">
        <div className="bg-primary pb-32">
          <Disclosure
            as="nav"
            className="border-b border-black/10 bg-primary lg:border-none"
          >
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-black/10">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-primary p-2 text-white hover:bg-old focus:outline-none focus:ring-offset-2 transition">
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
                          aria-current={item.current ? "page" : undefined}
                          className={classNames(
                            item.current
                              ? "bg-black/20 text-white"
                              : "text-white hover:bg-black/20 transition",
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
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-black/20 text-white"
                        : "text-white hover:bg-black/20 transition",
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
                Dashboard
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                    Electronic Data Interchange
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-black/50">
                    A Next.js-based parser for Transpas Enterprise EDI files,
                    designed to transform digital transport order formats into a
                    TPE-compatible XML structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div className="mx-auto max-w-7xl px-6 md:flex md:items-center md:justify-between lg:px-8 pb-8">
            <div className="flex justify-center gap-x-6 md:order-2">
              {footer.map((item) => (
                <a
                  key={item.name}
                  target="_blank"
                  href={item.href}
                  className="text-white/50 hover:text-white transition"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
              Transparse
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
