import Link from "next/link";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  checked: boolean;
  name: string;
  path: string;
  memory: {
    prev: number;
    curr: number;
  };
  index: number;
  onClick: (index: number) => void;
};

export default function NavItem({
  name,
  path,
  checked,
  memory,
  index,
  onClick,
}: Props) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const hrRef = useRef<HTMLHRElement>(null);

  useEffect(() => {
    if (linkRef?.current && hrRef?.current) {
      const linkWidth = linkRef.current?.offsetWidth;
      hrRef.current.style.width = `${linkWidth}px`;
    }
  }, [checked]);

  return (
    <div
      key={name}
      className={twMerge(
        "relative flex-1 text-center first:text-left last:text-right",
        memory.curr < index && "direction-rtl",
      )}
    >
      <Link
        ref={linkRef}
        href={path}
        onClick={() => onClick(index)}
        className="inline-block w-fit font-semibold"
      >
        {name.toUpperCase()}

        <hr
          ref={hrRef}
          className={twMerge(
            "invisible absolute rounded-md border-2 border-primary-black delay-700",
            checked && "visible",
            memory.prev !== memory.curr &&
              memory.prev === index &&
              memory.curr < index &&
              "rotate-45 animate-hr-move-left",
            memory.prev !== memory.curr &&
              memory.prev === index &&
              memory.curr > index &&
              "-rotate-45 animate-hr-move-right",
          )}
        />
      </Link>
    </div>
  );
}
