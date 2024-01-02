import { MdCopyright } from "react-icons/md";

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-16 flex grow-0 flex-col">
      <hr className="mb-2 border-[0.25px] border-hover-light dark:border-hover-dark" />
      <hr className="mb-2 border-[0.5px] border-hover-light dark:border-hover-dark" />

      <div className="flex min-h-[100px] flex-col items-center justify-center gap-1 bg-black text-white">
        <div className="flex items-center justify-center gap-1">
          <MdCopyright /> <p className="text-lg">Substratum {year}</p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <p className="text-sm">
            By interacting with this website you agree to the{" "}
            <a
              className="text-sm font-medium underline"
              href="https://chainlife.gitbook.io/docs/legal/terms"
              rel="noreferrer"
              style={{ fontFamily: "basic-sans, sans-serif" }}
              target="_blank"
            >
              terms
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
