/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="flex animate-jump-in flex-col gap-5 text-center">
        <p className="text-5xl md:text-7xl">404</p>
        <p className="text-xl md:text-3xl">Page Not Found.</p>
        <p>Sorry, I can't find the page you're looking for.</p>
        <button className="mt-5 w-fit self-center rounded-xl border border-primary-black px-10 py-3">
          <Link href={"/"}>Back to Home</Link>
        </button>
      </div>
    </div>
  );
}
