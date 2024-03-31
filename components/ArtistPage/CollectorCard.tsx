import React from "react";

interface Projects {
  editionsOwned: number[];
  title: string;
}

interface RowProps {
  editionsOwned: number[];
  title: string;
}

interface Props {
  collectorName: string;
  projects: Projects[];
}

const CollectorCard = ({ collectorName, projects }: Props) => {
  const ProjectCollectRow = ({ editionsOwned, title }: RowProps) => {
    return (
      <div className="flex h-fit w-full items-center justify-between border-b pl-3 last:border-none">
        <p className="font-extralight">{title}</p>
        <div className="my-2 w-fit max-w-[50%]">
          {editionsOwned.map((e, index) => (
            <span key={index}>
              {index == editionsOwned.length - 1 ? "#" + e : "#" + e + ", "}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-10 flex h-fit w-full flex-col border-y border-l md:w-4/5 md:flex-row">
      <div className="flex w-full items-center justify-center border-b md:w-1/4 md:border-b-0 md:border-r">
        <p className="font-bold">{collectorName}</p>
      </div>

      <div className="w-full md:w-3/4">
        {projects.map((p) => (
          <ProjectCollectRow
            editionsOwned={p.editionsOwned}
            key={p.title}
            title={p.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectorCard;
