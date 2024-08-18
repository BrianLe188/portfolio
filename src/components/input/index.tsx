import { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};
export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="grid">
      <label>{label}</label>
      <input {...props} className="bg-transparent p-1 outline-none" />
      <hr className="border border-dashed border-black" />
    </div>
  );
}
