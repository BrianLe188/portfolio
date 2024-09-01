import AIService from "@/services/ai";
import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { Modal } from "react-responsive-modal";
import { toast } from "react-toastify";

export type ModalJdSummaryRef = {
  onOpen: () => void;
  onClose: () => void;
  onSummary: (file: File) => Promise<void>;
};

type Props = {
  onSubmit: (value: string) => void;
};

export default forwardRef(function ModalJdSummary(
  { onSubmit }: Props,
  ref: Ref<ModalJdSummaryRef>,
) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    onOpen: onOpenModal,
    onClose: onCloseModal,
    onSummary: onSummarize,
  }));

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onLoading = () => setLoading(true);
  const onStopLoading = () => setLoading(false);

  const onSummarize = async (file: File) => {
    try {
      if (file) {
        onLoading();
        const res = await AIService.summaryJD(file);

        if (res) {
          setContent(String(res));
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      onStopLoading();
    }
  };

  const onUse = () => {
    onSubmit(content);
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      classNames={{
        modal: "modal",
      }}
    >
      <h2 className="mr-20 text-sm font-semibold text-primary-blue md:text-lg">
        Summarize your job description content with AI
      </h2>
      <hr className="mt-4" />
      <div className="mt-5">
        {loading ? (
          <div className="text-center">
            <div className="flex justify-center text-center">
              <div className="loader"></div>
            </div>
            <span className="animate-ping">Loading</span>
          </div>
        ) : (
          <p
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        )}
      </div>
      <div className="mt-10 flex justify-between">
        <button
          onClick={onCloseModal}
          className="rounded-md border bg-white px-5 py-2 text-sm text-primary-black hover:opacity-90 md:text-base"
        >
          Close
        </button>
        <button
          onClick={onUse}
          className="rounded-md bg-primary-black px-5 py-2 text-sm text-white hover:opacity-90 disabled:opacity-90 md:text-base"
          disabled={!content}
        >
          Use this result
        </button>
      </div>
    </Modal>
  );
});
