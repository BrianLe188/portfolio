import Input from "@/components/input";
import Textarea from "@/components/textarea";
import Upload from "@/components/upload";
import AIService from "@/services/ai";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

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

  const handleChange = (key: keyof typeof detail, value: string) => {
    setDetail((state) => ({
      ...state,
      [key]: value,
    }));
  };

  const handleChooseFile = async (e: FormEvent) => {
    const files = (e.target as HTMLInputElement)?.files;
    const file = files?.[0];

    if (file) {
      try {
        const res = await AIService.summaryJD(file);

        if (res) {
          handleChange("message", String(res));
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    }
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
          label={
            <div className="flex items-center gap-5 text-nowrap">
              Your message <Upload onChoose={handleChooseFile} />
            </div>
          }
          rows={5}
          value={detail.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
        <button className="font-semibold">SUBMIT</button>
      </form>
    </section>
  );
}
