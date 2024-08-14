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
    <main className="relative h-screen">
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center">
        {currentIndex <= 6 ? (
          <p className="text-[150px] font-bold lg:text-[250px]">
            {myName[currentIndex]}
          </p>
        ) : (
          <p className="animate-name-loading-move-up text-center text-[150px] font-bold lg:text-[250px]">
            {myName.slice(0, 4)} {myName.slice(4, max + 1)}
          </p>
        )}
      </div>
    </main>
  );
}
