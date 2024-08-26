/* eslint-disable @next/next/no-img-element */
"use client";

import VietAnh from "@/components/vietanh";
import Web from "@/components/web";
import Image from "next/image";
import { useLayoutEffect } from "react";

export default function FirstLook() {
  useLayoutEffect(() => {
    const assignPadding = () => {
      const vietanhFirstLookH1 = document.getElementById("vietanh-first-look");
      const socialContainer = document.getElementById("social-container");
      const windowWidth = document.body.clientWidth;

      if (socialContainer && vietanhFirstLookH1) {
        const vietanhH1Width = vietanhFirstLookH1.offsetWidth;

        socialContainer.style.paddingLeft = `${(windowWidth - vietanhH1Width) / 2 - 40}px`;
      }
    };

    assignPadding();

    window.addEventListener("resize", assignPadding);

    return () => {
      window.removeEventListener("resize", assignPadding);
    };
  }, []);

  return (
    <section className="relative mt-16 h-[calc(100vh-64px)]">
      <div
        id="social-container"
        className="relative z-50 flex items-center gap-5"
      >
        <Image
          src={"/icons/social/github.svg"}
          alt="github"
          width={40}
          height={40}
        />
        <Image
          src={"/icons/social/linkedin.svg"}
          alt="linkedin"
          width={40}
          height={40}
        />
      </div>
      <VietAnh />
      <img
        src="/me.png"
        alt="It's me"
        className="absolute bottom-0 left-1/2 h-full -translate-x-1/2 animate-fade object-cover lg:h-[130%]"
      />
      <Web />
    </section>
  );
}
