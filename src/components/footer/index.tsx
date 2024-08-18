import VietAnh from "@/components/vietanh";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-20">
      <div className="grid grid-cols-2 justify-between text-center font-semibold lg:grid-cols-3">
        <div>
          <Link href={"/about"}>ABOUT ME</Link>
          <p>FRONTEND</p>
          <p>BACKEND</p>
        </div>
        <div>
          <Link href={"/contact"}>CONTACT</Link>
          <p>anhkun123456@gmail.com</p>
          <p>vietanhle188.dev@gmail.com</p>
          <p>+84 828 030 359</p>
        </div>
        <div className="col-span-2 flex flex-col lg:col-span-1">
          <Link href={"/about"}>FOLLOW ME</Link>
          <Link href={"https://www.linkedin.com/in/viet-anh-le-033b29227/"}>
            LINKEDIN
          </Link>
          <Link href={"https://www.facebook.com/bivietanh.dev"}>FACEBOOK</Link>
          <Link href={"https://github.com/BrianLe188"}>GITHUB</Link>
        </div>
      </div>
      <VietAnh />
    </footer>
  );
}
