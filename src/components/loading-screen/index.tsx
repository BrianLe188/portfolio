/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const myName = "VIETANH";
  const max = myName.length - 1;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex <= max - 1) {
        setCurrentIndex((state) => state + 1);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="relative grid h-screen w-screen place-items-center">
        {currentIndex <= 6 ? (
          <p className="animate-jump-in text-[150px] font-bold lg:text-[250px]">
            {myName[currentIndex]}
          </p>
        ) : (
          <p className="absolute animate-name-loading-move-up text-center text-[150px] font-bold leading-none lg:text-[250px]">
            {myName.slice(0, 4)} {myName.slice(4, max + 1)}
          </p>
        )}
      </div>
    </main>
  );
}
