import VietAnh from "@/components/vietanh";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-5 md:pt-20">
      <div className="grid grid-cols-2 justify-between text-center text-xs font-semibold md:text-base lg:grid-cols-3">
        <div>
          <Link href={"/about"}>ABOUT ME</Link>
          <p>FRONTEND</p>
          <p>BACKEND</p>
        </div>
        <div>
          <Link href={"/contact"}>CONTACT</Link>
          <p>anhkun123456@gmail.com</p>
          <p>vietanhle188.dev@gmail.com</p>
          <a href="tel:+84828030359">+84 828 030 359</a>
        </div>
        <div className="col-span-2 flex flex-col lg:col-span-1">
          <Link href={"/about"}>FOLLOW ME</Link>
          <Link
            href={"https://www.linkedin.com/in/viet-anh-le-033b29227/"}
            about="Le Viet Anh Linkedin Profile"
          >
            LINKEDIN
          </Link>
          <Link
            href={"https://www.facebook.com/bivietanh.dev"}
            about="Le Viet Anh Facebook Profile"
          >
            FACEBOOK
          </Link>
          <Link
            href={"https://github.com/BrianLe188"}
            about="Le Viet Anh Github Profile"
          >
            GITHUB
          </Link>
        </div>
      </div>
      <VietAnh />
    </footer>
  );
}
