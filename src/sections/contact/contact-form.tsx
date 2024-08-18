import Input from "@/components/input";
import Textarea from "@/components/textarea";
import { FormEvent, useState } from "react";

type Props = {
  id?: string;
};

export default function ContactForm({ id }: Props) {
  const [detail, setDetail] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const atag = document.createElement("a");
    atag.href = `mailto:anhkun123456@gmail.com?subject=${detail.subject}&body=${detail.message.replaceAll("\n", "%0D%0A")}`;
    atag.click();
  };

  const handleChange = (key: string, value: string) => {
    setDetail((state) => ({
      ...state,
      [key]: value,
    }));
  };

  return (
    <section id={id} className="animate-fade-right">
      <h6 className="font-semibold">CONTACT FORM</h6>
      <form className="mt-14 grid gap-10" onSubmit={handleSubmit}>
        <Input
          label="Your email"
          type="email"
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <Input
          label="Your subject"
          onChange={(e) => handleChange("subject", e.target.value)}
        />
        <Textarea
          label="Your message"
          rows={5}
          onChange={(e) => handleChange("message", e.target.value)}
        />
        <button className="font-semibold">SUBMIT</button>
      </form>
    </section>
  );
}
