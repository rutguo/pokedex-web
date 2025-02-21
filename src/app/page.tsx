import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChatBubbleLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { JSX, SVGProps } from "react";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Customers", href: "#", current: false },
  { name: "Statistics", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
];

const discussions = [
  {
    id: 1,
    title: "Atque perspiciatis et et aut ut porro voluptatem blanditiis?",
    href: "#",
    author: { name: "Leslie Alexander", href: "#" },
    date: "2d ago",
    dateTime: "2023-01-23T22:34Z",
    status: "active",
    totalComments: 24,
    commenters: [
      {
        id: 12,
        name: "Emma Dorsey",
        imageUrl:
          "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 6,
        name: "Tom Cook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 4,
        name: "Lindsay Walton",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 16,
        name: "Benjamin Russel",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 23,
        name: "Hector Gibbons",
        imageUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  {
    id: 2,
    title: "Et ratione distinctio nesciunt recusandae vel ab?",
    href: "#",
    author: { name: "Michael Foster", href: "#" },
    date: "2d ago",
    dateTime: "2023-01-23T19:20Z",
    status: "active",
    totalComments: 6,
    commenters: [
      {
        id: 13,
        name: "Alicia Bell",
        imageUrl:
          "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 16,
        name: "Benjamin Russel",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 3,
        name: "Dries Vincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  {
    id: 3,
    title: "Blanditiis perferendis fugiat optio dolor minus ut?",
    href: "#",
    author: { name: "Dries Vincent", href: "#" },
    date: "3d ago",
    dateTime: "2023-01-22T12:59Z",
    status: "resolved",
    totalComments: 22,
    commenters: [
      {
        id: 19,
        name: "Lawrence Hunter",
        imageUrl:
          "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 21,
        name: "Angela Fisher",
        imageUrl:
          "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 14,
        name: "Jenny Wilson",
        imageUrl:
          "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 16,
        name: "Benjamin Russel",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  {
    id: 4,
    title: "Voluptatum ducimus voluptatem qui in eum quasi consequatur vel?",
    href: "#",
    author: { name: "Lindsay Walton", href: "#" },
    date: "5d ago",
    dateTime: "2023-01-20T10:04Z",
    status: "resolved",
    totalComments: 8,
    commenters: [
      {
        id: 10,
        name: "Emily Selman",
        imageUrl:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 11,
        name: "Kristin Watson",
        imageUrl:
          "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  {
    id: 5,
    title: "Perferendis cum qui inventore ut excepturi nostrum occaecati?",
    href: "#",
    author: { name: "Courtney Henry", href: "#" },
    date: "5d ago",
    dateTime: "2023-01-20T20:12Z",
    status: "active",
    totalComments: 15,
    commenters: [
      {
        id: 11,
        name: "Kristin Watson",
        imageUrl:
          "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 6,
        name: "Tom Cook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 10,
        name: "Emily Selman",
        imageUrl:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 16,
        name: "Benjamin Russel",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
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
              <ul role="list" className="divide-y divide-gray-100">
                {discussions.map((discussion) => (
                  <li
                    key={discussion.id}
                    className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
                  >
                    <div>
                      <p className="text-sm/6 font-semibold text-gray-900">
                        <a href={discussion.href} className="hover:underline">
                          {discussion.title}
                        </a>
                      </p>
                      <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                        <p>
                          <a
                            href={discussion.author.href}
                            className="hover:underline"
                          >
                            {discussion.author.name}
                          </a>
                        </p>
                        <svg
                          viewBox="0 0 2 2"
                          className="size-0.5 fill-current"
                        >
                          <circle r={1} cx={1} cy={1} />
                        </svg>
                        <p>
                          <time dateTime={discussion.dateTime}>
                            {discussion.date}
                          </time>
                        </p>
                      </div>
                    </div>
                    <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                      <div className="flex -space-x-0.5">
                        <dt className="sr-only">Commenters</dt>
                        {discussion.commenters.map((commenter) => (
                          <dd key={commenter.id}>
                            <img
                              alt={commenter.name}
                              src={commenter.imageUrl}
                              className="size-6 rounded-full bg-gray-50 ring-2 ring-white"
                            />
                          </dd>
                        ))}
                      </div>
                      <div className="flex w-16 gap-x-2.5">
                        <dt>
                          <span className="sr-only">Total comments</span>
                          {discussion.status === "resolved" ? (
                            <CheckCircleIcon
                              aria-hidden="true"
                              className="size-6 text-gray-400"
                            />
                          ) : (
                            <ChatBubbleLeftIcon
                              aria-hidden="true"
                              className="size-6 text-gray-400"
                            />
                          )}
                        </dt>
                        <dd className="text-sm/6 text-gray-900">
                          {discussion.totalComments}
                        </dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>
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
