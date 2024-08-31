import Link from "next/link";
import { usePathname } from "next/navigation";
import ItemWrapper from "./item-wrapper";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full animate-fade-down justify-between bg-primary-yellow px-10 py-5">
      <ItemWrapper />
    </nav>
  );
}
