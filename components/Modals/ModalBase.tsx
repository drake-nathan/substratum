import type { SetState } from "utils/types";

interface Props {
  children: React.ReactNode;
  setShowModal: SetState<boolean>;
}

const ModalBase = ({ children, setShowModal }: Props): JSX.Element => {
  return (
    <>
      <div
        className="fixed left-0 top-0 z-30 h-screen w-full cursor-pointer bg-overlay backdrop-blur-sm max-sm:h-[200vh]"
        onClick={() => setShowModal(false)}
      />
      <div
        className="fixed left-1/2 top-1/2 z-40 flex min-w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 rounded-xs border-3 border-black bg-white px-10 py-7 text-black dark:border-white dark:bg-black dark:text-white"
        role="dialog"
      >
        {children}
      </div>
    </>
  );
};

export default ModalBase;
