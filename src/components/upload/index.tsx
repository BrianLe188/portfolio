import { FormEvent, useState } from "react";
import { twMerge } from "tailwind-merge";

export type UploadProps = {
  onChoose?: (e: FormEvent) => Promise<void> | void;
};

export default function Upload({ onChoose, ...props }: UploadProps) {
  const [uploading, setUploading] = useState(false);

  const handleInputChange = async (e: FormEvent) => {
    try {
      setUploading(true);
      onChoose && (await onChoose(e));
    } catch (error) {
      throw error;
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="input-upload relative" {...props}>
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect
          rx="8"
          ry="8"
          className={twMerge("line", uploading && "start")}
          height="100%"
          width="100%"
          stroke-linejoin="round"
        />
      </svg>
      <input
        type="file"
        className="block w-full rounded-lg border border-gray-200 bg-gray-50 text-sm shadow-sm file:me-4 file:border-0 file:px-4 file:py-2 focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
        accept=".pdf"
        onChange={handleInputChange}
      />
    </div>
  );
}
