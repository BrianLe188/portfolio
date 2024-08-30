import { ReactNode, TextareaHTMLAttributes } from "react";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string | ReactNode;
};
export default function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div className="grid">
      <label>{label}</label>
      <textarea {...props} className="bg-transparent p-1 outline-none" />
      <hr className="border border-dashed border-black" />
    </div>
  );
}
