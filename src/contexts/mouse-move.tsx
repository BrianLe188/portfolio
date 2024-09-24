/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { createContext, PropsWithChildren, useLayoutEffect } from "react";
import { isMobile } from "react-device-detect";

const initialState = {};

export const MouseMoveContext = createContext(initialState);

export default function MouseMoveContextProvider({
  children,
}: PropsWithChildren) {
  useLayoutEffect(() => {
    if (!isMobile) {
      const coords = { x: 0, y: 0 };
      const circles = document.querySelectorAll(".circle ");

      const colors = [
        "#ffb56b",
        "#fdaf69",
        "#f89d63",
        "#f59761",
        "#ef865e",
        "#ec805d",
        "#e36e5c",
        "#df685c",
        "#d5585c",
        "#d1525c",
        "#c5415d",
        "#c03b5d",
        "#b22c5e",
        "#ac265e",
        "#9c155f",
        "#950f5f",
        "#830060",
        "#7c0060",
        "#680060",
        "#60005f",
        "#48005f",
        "#3d005e",
      ];

      circles.forEach(function (circle: any, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
      });

      window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
      });

      const animateCircles = () => {
        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle: any, index) {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";

          circle.style.scale = (circles.length - index) / circles.length;

          circle.x = x;
          circle.y = y;

          const nextCircle: any = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
      };

      animateCircles();
    }
  }, [isMobile]);

  return (
    <MouseMoveContext.Provider value={{}}>
      {children}
      <div className="hidden lg:block">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </MouseMoveContext.Provider>
  );
}
