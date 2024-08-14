import Link from "next/link";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Me",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="fixed top-0 z-50 flex w-full animate-fade-down justify-between bg-primary-yellow px-10 py-5">
      {navItems.map((i) => (
        <Link key={i.name} href={i.path} className="font-semibold">
          {i.name.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
