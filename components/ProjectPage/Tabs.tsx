import Tab from "./Tab";

interface Props {
  projectSlug: string;
  setTab: (tab: "details" | "mint" | "tokens") => void;
  tab: "details" | "mint" | "tokens";
}

const Tabs = ({ projectSlug, setTab, tab }: Props): JSX.Element => {
  const is100x =
    projectSlug === "100x10x1-a-goerli" || projectSlug === "100x10x1-a";

  return (
    <div className="flex w-full items-end justify-between border-b border-black px-6 dark:border-white sm:px-5 md:px-20">
      <div className="flex items-center gap-12 max-sm:gap-[0.375rem]">
        <Tab active={tab === "details"} onClick={() => setTab("details")}>
          {is100x ? "Shuffler" : "Details"}
        </Tab>

        <Tab active={tab === "tokens"} onClick={() => setTab("tokens")}>
          Tokens
        </Tab>

        {/* {is100x && (
          <Tab active={tab === "mint"} onClick={() => setTab("mint")}>
            Mint
          </Tab>
        )} */}
      </div>
    </div>
  );
};

export default Tabs;
