import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-20">
      <div className="grid grid-cols-1 justify-between text-center font-semibold md:grid-cols-2 lg:grid-cols-3">
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
        <div className="flex flex-col">
          <Link href={"/about"}>FOLLOW ME</Link>
          <Link href={"https://www.linkedin.com/in/viet-anh-le-033b29227/"}>
            LINKEDIN
          </Link>
          <Link href={"https://www.facebook.com/bivietanh.dev"}>FACEBOOK</Link>
          <Link href={"https://github.com/BrianLe188"}>GITHUB</Link>
        </div>
      </div>
      <h1 className="text-center text-[150px] font-bold lg:text-[250px]">
        VIET ANH
      </h1>
      <p className="flex justify-between text-xs">
        <span>
          Develop:{" "}
          <Link href={"https://www.facebook.com/bivietanh.dev"}>
            Le Viet Anh
          </Link>
        </span>
        <span>Copyright: {new Date().getFullYear()}</span>
        <span>
          Design UI Template:{" "}
          <Link
            href={
              "https://dribbble.com/shots/23446316-personal-brand-website-portfolio"
            }
          >
            https://dribbble.com/shots/23446316-Personal-Brand-Website-Portfolio
          </Link>
        </span>
      </p>
    </footer>
  );
}
