/* eslint-disable @next/next/no-img-element */

import Footer from "@/components/footer";
import VietAnh from "@/components/vietanh";
import ContactContainer from "@/sections/contact/contact-container";

export default function Contact() {
  return (
    <main className="mt-16 px-10">
      <VietAnh />
      <ContactContainer />
      <Footer />
    </main>
  );
}
