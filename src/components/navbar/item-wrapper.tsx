"use client";

import { usePathname } from "next/navigation";
import NavItem from "./nav-item";
import { useCallback, useMemo, useState } from "react";

const items = [
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

export default function ItemWrapper() {
  const pathname = usePathname();
  const currNav = items.findIndex((i) => i.path === pathname);
  const [navMemory, setNavMemory] = useState({
    prev: currNav,
    curr: currNav,
  });

  const handleChangeMemory = useCallback((curr: number) => {
    setNavMemory((state) => ({
      curr,
      prev: state.curr,
    }));
  }, []);

  return items.map((i, index) => (
    <NavItem
      key={i.name}
      index={index}
      onClick={handleChangeMemory}
      checked={pathname === i.path}
      memory={navMemory}
      {...i}
    />
  ));
}
